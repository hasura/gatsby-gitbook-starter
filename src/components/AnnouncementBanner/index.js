import React, { useState } from 'react';

import { StyledBanner } from './StyledBanner';

const CloseIconSvg = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 5.49878L5 15.4988M5 5.49878L15 15.4988"
      stroke="#80A3FF"
      stroke-width="1.43182"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.375 9.5L13.5 9.5"
      stroke="#80A3FF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.1875 14.5625L14.2501 9.49995L9.1875 4.4374"
      stroke="#80A3FF"
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
      <StyledBanner>
        <div className="thinBannerWrapper">
          <a
            href="https://hasura.io/events/hasura-con-2023/"
            className="flex-center"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <img
              loading="lazy"
              className="promoBrand"
              src="https://res.cloudinary.com/dh8fp23nd/image/upload/v1686143154/hasura-con-2023/has-con-light_j06vei.png"
              alt="Icon"
            />
            <div className="flex-center">
              {/* <div className="greenCircle" /> */}
              <div className="" fontWeight="font_bold">
                {/* <div className="greenCircle pinkCircle" /> */}
                <span className="displayInline">
                  Join us for the fourth annual Hasura User Conference on June 20-22. Register now
                  <span className="mobile-arrow-text">&nbsp;&gt;</span>
                </span>
              </div>
              <div className="arrowIcon">
                <ArrowRight />
              </div>
            </div>
          </a>
          <div
            className="close_icon"
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
    );
  }

  return null;
};
