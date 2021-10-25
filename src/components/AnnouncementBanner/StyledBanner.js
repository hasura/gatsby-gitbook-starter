import styled from "styled-components";

import bannerIllus from "../images/banner-stripe-bg-egc.svg";

export const StyledBanner = styled.div`
  background-color: #1b2738;
  background-image: url(${bannerIllus});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;

  .commonBannerStripWrapper {
    z-index: 100;
    position: relative;
    height: 56px;
    max-height: 56px;
    display: flex;
    align-items: center;

    transition: max-height 150ms ease-in-out;
    .text-contnet {
      font-family: "IBM Plex Sans";
      flex: 1;
      text-align: center;
      font-size: 14px;
      line-height: 25px;
      color: #f8fcff;
      font-weight: 400 !important;

      padding-bottom: 0px;
      .emoji {
        margin-right: 12px;
      }
      &:hover {
        .arrow {
          transform: translateX(5px);
        }
      }
      .arrow {
        transition: all 0.3s ease-in-out;
        margin-left: 6px;
        width: 8px;
        display: inline-block;
        img {
          min-width: 8px;
          margin-right: 0px;
        }
      }
    }
    .mobileBannerShow {
      display: none;
    }
    .closeBanner {
      cursor: pointer;
      margin-right: 32px;
      margin-bottom: -5px;

      svg {
        fill: #f8fcff;
      }
      &:focus {
        outline: none;
      }
    }
  }

  @media (max-width: 767px) {
    .hasuraConBannerBg {
      display: none;
    }
    .commonBannerStripWrapper {
      min-height: 80px;
      height: auto;
      max-height: none;
      padding: 15px 32px;
      overflow: visible;
      .text-contnet {
        text-align: left;
        padding-right: 15px;
        display: block;
      }
      .mobileBannerShow {
        display: block;
      }
      .mobileBannerHide {
        display: none;
      }
      .closeBanner {
        margin-right: 0;
        margin-left: 16px;
        right: 0;
      }
    }
  }
`;
