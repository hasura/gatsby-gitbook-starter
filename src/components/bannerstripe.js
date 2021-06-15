import React, { Fragment, useState } from "react";
import "./bannerstripe.css";
import closeIcon from "./images/close-banner.svg";
const BannerStripe = () => {
  const [showBanner, setShowBanner] = useState(false);
  return (
    <Fragment>
      {!showBanner ? (
        <div className="hasuraConBannerBg">
          <div className="containerWidth">
            <div className="commonBannerStripWrapper">
              <a
                href="https://hasura.io/events/hasura-con-2021/?pg=learn-course&plcmt=banner&cta=register-now&tech="
                className="articleDesc"
              >
                HasuraCon, our user conference is back! Registrations and talk submissions are
                now open!
              </a>
              {/*eslint-disable-next-line*/}
              <div
                className="closeBanner"
                role="button"
                tabIndex="0"
                onClick={() => setShowBanner(true)}
              >
                <img className={"img-responsive"} src={closeIcon} alt="Close" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default BannerStripe;
