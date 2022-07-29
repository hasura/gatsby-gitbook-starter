import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";

import { StyledBanner } from './StyledBanner';
// import { StyledStripBanner } from "./StyledBanner";

import hasuraCon22Logo from "../images/hasura-con.svg";
import smallBgIllus from "../images/banner_small_bg.jpg";

const StyledStripBanner = styled.div`
  background: #000000;
  background-image: url(${smallBgIllus});
  background-repeat: no-repeat;
  background-size: 30%;
  background-position-x: right;
  width: 100%;
  min-height: 60px;
  padding-left: 7%;
  padding-right: 7%;
  display: flex;
  align-items: center;
  /* padding: 0 9.5%; */
  justify-content: space-between;

  font-family: "IBM Plex Sans";
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
    min-width: 12px;
    width: 12px;
    min-height: 12px;
    height: 12px;
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

export const AnnouncementBanner = ({hideThinBanner}) => {
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
      <StyledStripBanner>
        <a href="https://hasura.io/events/hasura-con-2022/" className="flex-center">
          <img
            className="hasuraConBrand"
            src={hasuraCon22Logo}
            alt="hasura-con-22"
            id="logo-img"
          />
          <div className="flex-center ml-75">
            <div className="greenCircle" />
            <p>
              Catch the HasuraCon’22 Recordings
              <div className="arrow">{' >'}</div>
            </p>
          </div>
        </a>
        <div className="close_icon" role="button" tabIndex="0" onClick={()=>{handleCloseButton();hideThinBanner();}}>
          <CloseIconSvg />
        </div>
      </StyledStripBanner>
      {/*
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
          <div className="closeBanner" role="button" tabIndex="0" onClick={()=>{handleCloseButton();hideThinBanner();}}>
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
