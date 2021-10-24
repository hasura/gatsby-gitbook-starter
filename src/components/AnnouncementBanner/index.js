import React, { useState } from 'react';
import { Link } from 'gatsby';

import { StyledBanner } from './StyledBanner';

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

export const AnnouncementBanner = () => {
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
      <StyledBanner>
        <div className="commonBannerStripWrapper">
          <Link
            to="/enterprisegraphql/?pg=home&plcmt=banner&cta=sign-up&tech="
            className="text-contnet mobileBannerHide"
          >
            <span className="emoji" role="img" aria-label="emoji">
              👋
            </span>
            The Enterprise GraphQL Conf is back! Explore the concept of a GraphQL powered Data Mesh
            <div className="arrow">{' >'}</div>
          </Link>
          <Link
            to="/enterprisegraphql/?pg=home&plcmt=banner&cta=sign-up&tech="
            className="text-contnet hasura-font-bold mobileBannerShow"
          >
            <span className="emoji" role="img" aria-label="emoji">
              👋
            </span>
            GraphQL &amp; the Data Mesh at Enterprise GraphQL Conf’21
            <div className="arrow">{' >'}</div>
          </Link>
          <div className="closeBanner" role="button" tabIndex="0" onClick={handleCloseButton}>
            <CloseIconSvg />
          </div>
        </div>
      </StyledBanner>
    );
  }

  return null;
};
