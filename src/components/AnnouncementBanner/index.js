import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { StyledBanner } from './StyledBanner';

const CloseIconSvg = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 5.49878L5 15.4988M5 5.49878L15 15.4988"
      stroke="#3970FD"
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
      stroke="#3970FD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.1875 14.5625L14.2501 9.49995L9.1875 4.4374"
      stroke="#3970FD"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const AnnouncementBanner = () => {
  const [isBannerActive, toggleBanner] = useState(true);

  const bannerData = useStaticQuery(graphql`
    query {
      banner {
        bannerData {
          data {
            attributes {
              bannerType
              bannerTitle
              linkUrl
              isExternalLink
              isGeneralAvailableBanner
              isActiveOnLearn
              isDarkMode
              bgColor
              button {
                text
                url
                type
              }
              bannerLogoImg {
                data {
                  attributes {
                    url
                  }
                }
              }
              bannerIllustrationBgImg {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  if (
    bannerData &&
    bannerData?.banner &&
    bannerData.banner.bannerData &&
    bannerData.banner.bannerData?.data &&
    bannerData.banner.bannerData.data?.constructor.name === 'Array' &&
    bannerData.banner.bannerData.data.length > 0
  ) {
    const thinStripBannerData = bannerData?.banner?.bannerData?.data.filter(
      (bannerObj) =>
        bannerObj?.attributes?.bannerType === 'thin-strip-banner' &&
        bannerObj?.attributes?.isActiveOnLearn
    );

    if (thinStripBannerData[0] && isBannerActive) {
      const handleCloseButton = () => {
        const buttonElement = document.getElementById('mobile-header-cta');

        if (buttonElement) {
          buttonElement.style.paddingBottom = '0px';
        }

        toggleBanner(false);
      };

      const bannerData = thinStripBannerData[0]?.attributes;

      return (
        <StyledBanner>
          <div className="thinBannerWrapper">
            <a
              href={bannerData?.linkUrl}
              className="flex-center"
              // target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex-center">
                {/* <div className="greenCircle" /> */}
                {bannerData?.bannerLogoImg?.data?.attributes?.url && (
                  <img
                    loading="lazy"
                    className="promoBrand"
                    src={bannerData.bannerLogoImg.data.attributes.url}
                    alt="Icon"
                  />
                )}
                <div className="" fontWeight="font_bold">
                  {/* <div className="greenCircle pinkCircle" /> */}
                  <span className="displayInline">
                    {bannerData?.bannerTitle}
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
              }}
            >
              <CloseIconSvg />
            </div>
          </div>
        </StyledBanner>
      );
    }

    return null;
  }

  return null;
};
