import React, { Fragment, useState } from "react";
import "./bannerstripe.css";
import closeIcon from "./images/close-banner.svg";
import arrowBlock from "./images/arrow-block.svg";
import { getUTMPagePathName } from '../utils/getUTMPagePathName';

const CloseIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 3C9.705 3 3 9.705 3 18C3 26.295 9.705 33 18 33C26.295 33 33 26.295 33 18C33 9.705 26.295 3 18 3ZM24.45 24.45C23.865 25.035 22.92 25.035 22.335 24.45L18 20.115L13.665 24.45C13.08 25.035 12.135 25.035 11.55 24.45C10.965 23.865 10.965 22.92 11.55 22.335L15.885 18L11.55 13.665C10.965 13.08 10.965 12.135 11.55 11.55C12.135 10.965 13.08 10.965 13.665 11.55L18 15.885L22.335 11.55C22.92 10.965 23.865 10.965 24.45 11.55C25.035 12.135 25.035 13.08 24.45 13.665L20.115 18L24.45 22.335C25.02 22.905 25.02 23.865 24.45 24.45Z"
      fill="white"
    />
  </svg>
);

const BannerStripe = ({ location }) => {
  const [showBanner, setShowBanner] = useState(false);
  return (
    <Fragment>
      {!showBanner ? (
        <div className="commonBannerStripWrapperBg">
          <div className="containerWidth">
            <div className="commonBannerStripWrapper">
              <a
                href={`https://hasura.io/enterprisegraphql/?pg=${getUTMPagePathName(location?.pathname)}&plcmt=banner&cta=sign-up&tech=`}
                className="articleDesc hasura-font-bold mobileBannerHide"
              >
                <span className='emoji' role="img" aria-label="emoji">
                  👋
                </span>
                The Enterprise GraphQL Conf is back! Explore the concept of a GraphQL powered Data Mesh
                <div className='arrow'>
                  {" >"}
                </div>
              </a>
              <a
                href={`https://hasura.io/enterprisegraphql/?pg=${getUTMPagePathName(location?.pathname)}&plcmt=banner&cta=sign-up&tech=`}
                className="articleDesc hasura-font-bold mobileBannerShow"
              >
                <span className="emoji" role="img" aria-label="emoji">
                  👋
                </span>
                GraphQL & the Data Mesh at Enterprise GraphQL Conf’21
                <div className="arrow">{" >"}</div>
              </a>
              {/*eslint-disable-next-line*/}
              <div
                className="closeBanner"
                role="button"
                tabIndex="0"
                onClick={() => setShowBanner(true)}
              >
                <CloseIconSvg />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default BannerStripe;
