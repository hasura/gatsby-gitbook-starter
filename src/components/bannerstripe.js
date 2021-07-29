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
                href="https://hasura.io/blog/july-roundup-of-hasuras-product-launches-bigquery-citus-support-database-monitoring/?pg=learn-cours&plcmt=banner&cta=read-blog-post&tech="
                className="articleDesc hasura-font-bold"
              >
                <span className='emoji' role="img" aria-label="emoji">
                  👋
                </span>
                New product launches in July! Read our roundup
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
