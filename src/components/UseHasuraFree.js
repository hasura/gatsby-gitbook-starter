import React from "react";
import styled from '@emotion/styled';

import ArrowRight from "../globals/icons/ArrowRight";

import hasuraFree from "./images/hasura-free.png";
import star from "./images/star.svg";

const StyledPromoBanner = styled.div`
  background-image: url(${hasuraFree});
  background-color: #EBF1F7;
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr;
  .p40 {
    padding: 38px 50px;
    align-self: center;
  }
  .promoTitle {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    padding-bottom: 8px;
  }
  .contributeLink {
    display: inline-block;
    text-transform: uppercase;
    font-family: "IBM Plex Sans";
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    color: #1B2738;
    a {
      display: flex;
      align-items: center;
      color: #1B2738;
      &:hover {
        .arrow {
          transform: translateX(4px);
        }
      }
      .arrow {
        display: flex;
        margin-left: 3px;
        transition: all .3s ease-in-out;
      }
    }
  }
  ul {
    padding-bottom: 24px;
    li {
      list-style-type: none;
      padding: 8px 0;
      font-weight: 300;
      display: flex;
      align-items: flex-start;
      img {
        margin-right: 8px;
        margin-top: 4px;
        width: 12px !important;
        min-width: 12px !important;
      }
    }
  }
  .promoImgWrapper {
    display: none;
    text-align: right;
    padding-top: 24px;
    img {
      display: inline-block;
      border-radius: 4px;
      margin-bottom: 0;
      vertical-align: bottom;
    }
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    background-image: none;
    .promoImgWrapper {
      display: block;
    }
  }
  @media (max-width: 767px) {
    background-image: none;
    .p40 {
      padding: 20px;
      padding-bottom: 0;
    }
    .promoImgWrapper {
      display: block;
      margin-bottom: 0;
      vertical-align: bottom;
    }
  }
`;

const UseHasuraFree = () => {
  return (
    <StyledPromoBanner>
      <div className="p40">
        <div className="promoTitle">Start with GraphQL on Hasura for Free</div>
        <ul>
          <li>
            <img src={star} alt="Arrow" />
            Build apps and APIs 10x faster
          </li>
          <li>
            <img src={star} alt="Arrow" />
            Built-in authorization and caching
          </li>
          <li>
            <img src={star} alt="Arrow" />
            8x more performant than hand-rolled APIs
          </li>
        </ul>
        <div className="contributeLink">
          <a href="https://cloud.hasura.io/signup?pg=learn-course&plcmt=body&cta=try-graphql-with-hasura&tech=default">
            Try GraphQL with Hasura
            <div className="arrow">
              <ArrowRight variant="grey100" size="xs" className="arrow"/>
            </div>
          </a>
        </div>
      </div>
      <div className="promoImgWrapper">
        <img className="showMobile" src={hasuraFree} alt="Promo" />
      </div>
    </StyledPromoBanner>
  );
};

export default UseHasuraFree;
