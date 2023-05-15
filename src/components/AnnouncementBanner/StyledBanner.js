import styled from 'styled-components';

import bannerIllus from '../images/banner-stripe-bg-egc.svg';
import smallBgIllus from '../images/banner_small_bg.jpg';

export const StyledBanner = styled.div`
  background-color: #ffef93;
  /* background-image: url(${bannerIllus}); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  /* background-position: center; */

  .ph-img {
    width: 50px;
    margin-right: 11px;
    /* margin-bottom: -10px */
  }

  .displayInline {
    color: #1e56e3 !important;
  }

  .promoBrand {
    width: auto;
    height: 27px;
    max-height: 27px;
    margin-right: -30px;
    margin-left: 3px;
  }

  @media (max-width: 980px) {
    .promoBrand {
      display: none;
    }
  }

  .mobile-arrow-text {
    display: none;
  }

  @media (max-width: 780px) {
    .mobile-arrow-text {
      display: inline-block;
    }
  }

  .commonBannerStripWrapper {
    z-index: 100;
    position: relative;
    height: 96px;
    max-height: 96px;
    display: flex;
    align-items: center;

    transition: max-height 150ms ease-in-out;
    .text-contnet {
      font-family: 'IBM Plex Sans';
      flex: 1;
      text-align: center;
      font-size: 14px;
      line-height: 25px;
      color: #1e56e3;
      font-weight: 400 !important;
      display: flex;
      justify-content: center;
      align-items: center;

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
        fill: #1e56e3;
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

    .ph-img {
      /* display: none; */
      width: 32px;
      margin-right: 4px;
      margin-bottom: -8px;
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

  @media (max-width: 450px) {
    .commonBannerStripWrapper {
      .text-contnet {
        font-size: 12px !important;
      }
    }
  }

  @media (max-width: 410px) {
    .ph-img {
      display: none;
    }
  }
`;

export const StyledStripBanner = styled.div`
  background: #ffef93;
  /* background-image: url(${smallBgIllus}); */
  /* background-repeat: no-repeat; */
  /* background-size: 30%; */
  /* background-position-x: right; */
  width: 100%;
  min-height: 60px;
  padding-left: 32px;
  padding-right: 7%;
  display: flex;
  align-items: center;
  /* padding: 0 9.5%; */
  justify-content: space-between;

  font-family: 'IBM Plex Sans';
  .hasuraConBrand {
    max-height: 40px;
  }
  #mobile-arrow {
    display: none;
  }
  a {
    &:hover {
      p {
        .arrow {
          transform: translateX(5px);
        }
      }
    }
  }
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 148%;
    color: #f8f8f8;
    margin: 0;
    display: flex;
    align-items: center;
    .arrow {
      transition: all 0.3s ease-in-out;
      margin-left: 4px;
    }
  }

  // ****************************** //

  @keyframes up-right {
    0% {
      transform: scale(1);
      opacity: 0.25;
    }
    50% {
      transform: scale (1, 5);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0.25;
    }
  }

  .greenCircle {
    min-width: 10px;
    width: 10px;
    min-height: 10px;
    height: 10px;
    background-color: #54c596;
    border-radius: 50%;
    margin-right: 12px;
    -webkit-animation: up-right 1s infinite;
    -moz-animation: up-right 1s infinite;
    -o-animation: up-right 1s infinite;
    animation: up-right 1s infinite;
  }
  .close_icon {
    cursor: pointer;
  }
  .flex-center {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
  }
  .ml-75 {
    margin-left: -75px;
  }

  button {
    width: 179px;
    height: 40px;
    background: #ffffff;
    border-radius: 4px;
    border: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 160%;
    color: #000000;
    margin-left: 25px;
    white-space: nowrap;
  }

  @media (max-width: 1200px) {
    padding-left: 3%;
    padding-right: 3%;
    background-size: 38%;
    #logo-img {
      width: 100px;
    }

    p {
      font-size: 14px !important;
    }
  }

  @media (max-width: 900px) {
    padding-right: 32px;

    background-size: 50%;

    #logo-img {
      display: none;
    }

    p {
      font-size: 13px !important;
    }

    button {
      width: 140px;
      height: 30px;
      font-size: 13px;

      svg {
        margin-left: 6px !important;
      }
    }
  }

  @media (max-width: 710px) {
    background-image: none;
    .ml-75 {
      margin-left: 0px;
    }
    p {
      .arrow {
        display: none;
      }
    }
  }

  @media (max-width: 550px) {
    #right_chevron {
      display: none;
    }

    #mobile-arrow {
      display: inline-block;
      margin-left: 8px;
      margin-bottom: -3px;
    }

    p {
      font-size: 14px !important;
      line-height: 1.6;
    }

    button {
      display: none;
    }
  }
`;
