import React, { useState, useEffect } from 'react';
import './marketoStyles.scss';
// const marketoScriptId = 'mktoForms';
export default function MarketoForm({
  formId,
  marketoHost,
  id,
  styleClass,
  onSubmitCB,
  marketoScriptId,
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const marketoScriptIdUpdate = marketoScriptId ? marketoScriptId : 'mktoForms';

  useEffect(() => {
    if (!document.getElementById(marketoScriptIdUpdate) || !window.MktoForms2) {
      loadScript();
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    isLoaded && window.MktoForms2.loadForm(marketoHost, id, formId, form => {
      form.onSubmit(function () {
        // Get the form field values
        const vals = form.vals();
        //call analytics.track method on submit
        window.analytics.track(`Marketo Form ${formId} Submitted`, vals);
      });
    });
  }, [isLoaded, formId, marketoHost, id]);

  const loadScript = () => {
    var s = document.createElement('script');

    s.id = marketoScriptIdUpdate;
    s.type = 'text/javascript';
    s.async = true;
    s.src = `${marketoHost}/js/forms2/js/forms2.min.js`;
    s.onreadystatechange = function () {
      if (this.readyState === 'complete' || this.readyState === 'loaded') {
        setIsLoaded(true);
      }
    };
    s.onload = () => setIsLoaded(true);
    if (!window.MktoForms2) {
      document.getElementsByTagName('head')[0].appendChild(s);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (onSubmitCB) {
            onSubmitCB();
          }
        }}
        className={styleClass}
        id={`mktoForm_${formId}`}
      ></form>
    </div>
  );
}
