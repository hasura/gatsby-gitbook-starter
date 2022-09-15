import React from "react";
import styled from '@emotion/styled';

import githubBrands from "./images/github-brands-gray.svg";
import twitterBrands from "./images/twitter-brands-gray.svg";
import discordBrands from "./images/discord-brands-gray.svg";
import facebookBrands from "./images/facebook-brands-gray.svg";
import instagramBrands from "./images/instagram-brands-gray.svg";
import youtubeBrands from "./images/youtube-brands-gray.svg";
import linkedinBrands from "./images/linkedin-brands-gray.svg";
import hasuraLogoColor from "./images/hasura-logo-color.svg";

const CopyWriteWrapper = styled('div')`
  padding: 22px 0;
  display: flex;
  align-items: center;
  .brand {
    a {
      display: grid;
    }
  }
  .hasura-ibm-plex-mono {
    flex: 1;
    text-align: center;
    color: rgb(79, 109, 135);
  }
  .footerSocialIconsWrapper {
    display: flex;
    align-items: center;
    .socialBrands {
      margin: 0 10px;
      opacity: .8;
      a {
        display: grid;
      }
      &:hover {
        opacity: 1;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media(min-width: 1025px) and (max-width: 1420px) {
    flex-direction: column;
    align-items: center;
    .brand {
      text-align: center;
      padding-bottom: 16px;
    }
    .hasura-ibm-plex-mono {
      padding-bottom: 32px;
    }
  }
  @media(max-width: 767px) {
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    .brand {
      text-align: center;
      padding-bottom: 16px;
    }
    .hasura-ibm-plex-mono {
      padding-bottom: 42px;
    }
    .copyWrite {
      padding: 20px 0;
    }
  }
`;

const CopyWriter = () => {
  return (
    <CopyWriteWrapper>
      <div className="brand">
        <a href="https://hasura.io/">
          <img src={hasuraLogoColor} alt="Brand logo" />
        </a>
      </div>
      <div className="hasura-ibm-plex-mono">
        © {new Date().getFullYear()} Hasura Inc. All rights reserved
      </div>
      <div className="footerSocialIconsWrapper">
        <div className="socialBrands">
          <a
            href={"https://github.com/hasura/graphql-engine"}
            rel="noopener noreferrer"
            aria-label={"Github"}
          >
            <img loading="lazy" src={githubBrands} alt="Github" />
          </a>
        </div>
        <div className="socialBrands">
          <a
            href={"https://twitter.com/hasurahq"}
            rel="noopener noreferrer"
            aria-label={"Titter"}
          >
            <img loading="lazy" src={twitterBrands} alt="Titter" />
          </a>
        </div>
        <div className="socialBrands">
          <a
            href={"https://discord.com/invite/hasura"}
            rel="noopener noreferrer"
            aria-label={"Discord"}
          >
            <img loading="lazy" src={discordBrands} alt="Discord" />
          </a>
        </div>
        <div className="socialBrands">
          <a
            href={"https://www.facebook.com/HasuraHQ"}
            rel="noopener noreferrer"
            aria-label={"Facebook"}
          >
            <img loading="lazy" src={facebookBrands} alt="Facebook" />
          </a>
        </div>
        <div className="socialBrands">
          <a
            href={"https://www.instagram.com/hasurahq/?hl=en"}
            rel="noopener noreferrer"
            aria-label={"Instagram"}
          >
            <img loading="lazy" src={instagramBrands} alt="Instagram" />
          </a>
        </div>
        <div className="socialBrands">
          <a
            href={"https://www.youtube.com/channel/UCZo1ciR8pZvdD3Wxp9aSNhQ"}
            rel="noopener noreferrer"
            aria-label={"Youtube"}
          >
            <img loading="lazy" src={youtubeBrands} alt="Youtube" />
          </a>
        </div>
        <div className="socialBrands">
          <a
            href={"https://www.linkedin.com/company/hasura"}
            rel="noopener noreferrer"
            aria-label={"Linkedin"}
          >
            <img loading="lazy" src={linkedinBrands} alt="Linkedin" />
          </a>
        </div>
      </div>
    </CopyWriteWrapper>
  );
};
export default CopyWriter;
