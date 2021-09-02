import React, { Fragment, useState } from "react";
import "./bannerstripe.css";
import closeIcon from "./images/close-banner.svg";
import arrowBlock from "./images/arrow-block.svg";
import { getUTMPagePathName } from '../utils/getUTMPagePathName';
const BannerStripe = ({ location }) => {
  const [showBanner, setShowBanner] = useState(false);
  return (
    <Fragment>
      {!showBanner ? (
        <div className="commonBannerStripWrapperBg">
          <div className="containerWidth">
            <div className="commonBannerStripWrapper">
              <a
                href={`https://hasura.io/events/webinar/diagnosing-improving-query-performance/?pg=${getUTMPagePathName(location?.pathname)}&plcmt=banner&cta=sign-up&tech=`}
                className="articleDesc hasura-font-bold"
              >
                <span className='emoji' role="img" aria-label="emoji">
                  👋
                </span>
                GraphQL Observability to Diagnose & Improve Query Performance - Sign up for our webinar
                <div className='arrow'>
                  {" >"}
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
