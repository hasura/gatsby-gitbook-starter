import React, { useState } from 'react';

// import { StyledBanner } from './StyledBanner';

const CloseIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
      <path
        d="M18.2988 5.70744C17.9088 5.31744 17.2788 5.31744 16.8888 5.70744L11.9988 10.5874L7.10875 5.69744C6.71875 5.30744 6.08875 5.30744 5.69875 5.69744C5.30875 6.08744 5.30875 6.71744 5.69875 7.10744L10.5888 11.9974L5.69875 16.8874C5.30875 17.2774 5.30875 17.9074 5.69875 18.2974C6.08875 18.6874 6.71875 18.6874 7.10875 18.2974L11.9988 13.4074L16.8888 18.2974C17.2788 18.6874 17.9088 18.6874 18.2988 18.2974C18.6888 17.9074 18.6888 17.2774 18.2988 16.8874L13.4088 11.9974L18.2988 7.10744C18.6788 6.72744 18.6788 6.08744 18.2988 5.70744Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.375 9.5L13.5 9.5"
      stroke="#1EB4D4"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.1875 14.5625L14.2501 9.49995L9.1875 4.4374"
      stroke="#1EB4D4"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const AnnouncementBanner = ({ hideThinBanner }) => {
  const [isBannerActive, toggleBanner] = useState(true);

  const handleCloseButton = () => {
    const buttonElement = document.getElementById('mobile-header-cta');

    if (buttonElement) {
      buttonElement.style.paddingBottom = '0px';
    }

    toggleBanner(false);
  };

  if (isBannerActive) {
    return (
      <>
        <div className="thinBannerWrapper">
          <a href="https://hasura.io/enterprisegraphql/" className="flex-center">
            <div className="flex-center">
              {/* <div className="greenCircle" /> */}
              <div className="textGradient" fontWeight="font_bold">
                <div className="greenCircle pinkCircle" />
                <span className="displayInline">
                  Enterprise GraphQL conference is over. View recordings
                </span>
              </div>
              <div className="arrowIcon">
                <ArrowRight />
              </div>
            </div>
          </a>
        <div className="close_icon" role="button" tabIndex="0" onClick={()=>{handleCloseButton();hideThinBanner();}}>
          <CloseIconSvg />
        </div>
      </div>
      {/*
        <StyledBanner>
          <div className="commonBannerStripWrapper">
            <a
              href="https://www.producthunt.com/posts/hasura-native-postgres-integration"
              className="text-contnet"
            >
              <img
                src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1666068552/Swag%20Store/ph_cat_hmpt8g.png"
                alt="ProductHunt"
                className="ph-img"
              />
              Instant GraphQL backend with Hasura & Neon in under 2 mins. Support us on&nbsp;
              <span style={{ color: '#D95535', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
                Product Hunt!
              </span>
              <div className="arrow">{' >'}</div>
            </a>
            <div
              className="closeBanner"
              role="button"
              tabIndex="0"
              onClick={() => {
                handleCloseButton();
                hideThinBanner();
              }}
            >
              <CloseIconSvg />
            </div>
          </div>
        </StyledBanner>
        */}
      </>
    );
  }

  return null;
};
