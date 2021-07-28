import React, { Fragment, useState } from "react";
import "./bannerstripe.css";
import closeIcon from "./images/close-banner.svg";
import arrowBlock from "./images/arrow-block.svg";
const BannerStripe = () => {
  const [showBanner, setShowBanner] = useState(false);
  return (
    <Fragment>
      {!showBanner ? (
        <div className="commonBannerStripWrapperBg">
          <div className="containerWidth">
            <div className="commonBannerStripWrapper">
              <a
                href="https://hasura.io/community/community-call/?pg=learn-course&plcmt=header&cta=register&tech="
                className="articleDesc"
              >
                New features being launched at our Community Call. Register to attend
                <div className='arrow'>
                  <img src={arrowBlock} alt='Arrow' />
                </div>
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
