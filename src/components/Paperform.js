import { navigate } from "gatsby";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

const isBrowser = typeof window !== "undefined";

const StyledLoadingText = styled.span`
  display: inline-block;
  text-align: center;
  width: 100%;
  padding: 1rem 0;
  font-weight: 400;
  font-size: 16px;
`;

export default function Paperform({ formId, onSubmitCB, styleClass }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const embedDivRef = useRef(null);

  useEffect(() => {
    const existingEmbed = document.getElementById("paperform_embed");

    if (existingEmbed) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "paperform_embed";
    script.src = "https://forms.hasura.io/__embed.min.js";
    script.onreadystatechange = () => {
      if (this.readyState === "complete" || this.readyState === "loaded") {
        setIsLoaded(true);
      }
    };
    script.onload = () => setIsLoaded(true);
    document.body.prepend(script);

    return () => script.remove();
  }, []);

  function handleFormSubmit({ detail }) {
    const { form_id, data } = detail;
    const email = data.find(d => d.type === "email")?.value;

    if (!!email) {
      // let nameTraits = {};
      // if (!!vals.FirstName) nameTraits.firstName = vals.FirstName;
      // if (!!vals.LastName) nameTraits.lastName = vals.LastName;

      window.analytics.identify(email, {
        email,
        identifiedBy: `Paperform ${form_id} Submitted`,
        // ...nameTraits,
      });
    }

    window.analytics.track("form submit", {
      data,
      category: "learn",
      label: `Paperform ${form_id} Submitted`,
      action: "form submit",
    });

    typeof onSubmitCB === "function" && onSubmitCB(detail);
    let redPath = window.location.pathname;
    if (redPath.startsWith("/learn/")) {
      redPath = redPath.replace("/learn/", "/");
    }
    navigate(`${redPath}?aliId=success_submit`);
  }

  useEffect(() => {
    const refCurrValue = embedDivRef.current;

    isBrowser &&
      refCurrValue?.setAttribute(
        "data-prefill",
        `utm_landing-page=${window.location.pathname}&utm_search=${window.location.search}`
      );

    refCurrValue?.addEventListener("PaperformSubmission", handleFormSubmit);
    return () => refCurrValue?.removeEventListener("PaperformSubmission", handleFormSubmit);
  }, []);

  return (
    <div className={styleClass}>
      {!isLoaded && <StyledLoadingText>Loading...</StyledLoadingText>}
      <div
        data-prefill-inherit="1"
        data-no-scroll="1"
        ref={embedDivRef}
        id={formId}
        data-paperform-id={formId}
        data-spinner="1"
      />
    </div>
  );
}
