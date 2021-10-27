import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import GitHubButton from "react-github-btn";
import { MDXProvider } from '@mdx-js/react';
import ThemeProvider from './themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import MarketoForm from './marketoform';
import CloseIcon from '../globals/icons/Close';
import OpenedSvg from './images/opened';

import usFlag from "./images/us-flag.svg";
import chinaFlag from "./images/china-flag.svg";
import japanFlag from "./images/japan-flag.svg";
import config from '../../config';

const marketoHost = 'https://page.hasura.io';

const Wrapper = styled('div')`
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr;
  transition: all 0.3s ease-in-out 0s;
  padding-left: 320px;
  padding-right: 256px;
  .learnAsideWrapperPos {
    padding: 32px 32px !important;
  }
  .sidebarWrapperCollapse {
    background-color: transparent !important;
    width: 150px !important;
    border-right: 0 !important;
    border-bottom: 0 !important;
    min-height: auto !important;
    height: auto !important;
  }
  @media(max-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
    .translateXZero {
      transform: translateX(0) !important;
    }
  }
`;

const Content = styled('main')`
  display: flex;
  /* flex-grow: 1; */
  margin: 0px auto;
  max-width: 1176px;
  width: 100%;
  padding: 32px;

  @media(max-width: 1024px) {
  }
`;

const MaxWidth = styled('div')`
  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

const LeftSideBarWidth = styled('div')`
  width: 320px;
  background-color: rgb(244, 248, 251);
  /* padding: 16px; */
  min-height: calc(100vh - 72px);
  height: calc(100vh - 72px);
  border-right: 1px solid rgb(214, 222, 230);
  border-bottom: 1px solid rgb(214, 222, 230);
  display: grid;
  position: fixed;
  top: 72px;
  left: 0px;
  transition: all 0.3s ease-in-out 0s;
  .p16 {
    padding: 24px 16px;
    padding-bottom: 0;
  }
  .mainSideBarToggle {
    position: absolute;
    top: 18px;
    left: 300px;
    z-index: 100000 !important;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s ease-in-out;
    svg {
      path {
        fill: #1B2738;
      }
    }
    .navigation {
      position: absolute;
      left: 42px;
      top: 8px;
    }
  }
  .alignSelfEnd {
    align-self: flex-end;
  }
  .showMobile {
    display: none;
  }
  .mainSideBarTogglePos {
    left: 16px;
  }
  @media(max-width: 1024px) {
    z-index: 100000 !important;
    transform: translateX(-340px);
    min-height: 100vh;
    height: 100vh;
    top: 0;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.16);
    .mainSideBarToggle {
      display: none;
    }
    .showMobile {
      display: block;
    }
  }
`;

const RightSideBarWidth = styled('div')`
  width: 256px;
  border-left: 1px solid #D5DEE6;
  min-height: calc(100vh - 72px);
  height: calc(100vh - 72px);
  display: grid;
  position: fixed;
  top: 72px;
  right: 0px;
  transition: all 0.3s ease-in-out 0s;
  @media(max-width: 1024px) {
    display: none;
  }
`;
const LanguageWrapper = styled('div')`
  .languageWrapper {
    position: relative;
    padding: 16px 24px;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .languageBgn {
      padding: 4px 8px;
      border: 1px solid #D5DEE6;
      border-radius: 4px;
      font-family: "IBM Plex Sans";
      font-weight: 300;
      font-size: 12px;
      color: #616D75;
      display: flex;
      align-items: center;
      background-color: #fff;
      cursor: pointer;
      min-height: 28px;
      img {
        margin-right: 8px;
        border-radius: 2px;
      }
      &:hover {
        background-color: #EBF1F7;
      }
    }
    .githubStars {
      display: flex;
      align-items: center;
      span {
        display: flex;
      }
    }
    .languageDropDownWrapper {
      display: none;
      position: absolute;
      top: 56px;
      background-color: #FFFFFF;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      padding: 12px 16px;
      ul {
        li {
          list-style-type: none;
          a {
            display: flex;
            align-items: center;
            padding: 8px 8px;
            font-family: "IBM Plex Sans";
            font-weight: 300;
            font-size: 12px;
            color: #616D75;
            border-radius: 4px;
            &:hover {
              background-color: #EBF1F7;
            }
            img {
              margin-right: 8px;
            }
          }
        }
      }
    }
    .showList {
      display: block;
    }
  }
  @media(max-width: 1024px) {
    .languageWrapper {
      border-top: 1px solid rgb(214, 222, 230);
      padding: 16px 24px;
    }
  }
`;

const MenuNavToggle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H9H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H9H3ZM9.75 3.75V20.25H20.25V3.75H9.75ZM8.25 3.75H3.75V20.25H8.25V3.75Z" fill="#0079BD"/>
  </svg>


)
const MenuNavToggleSmall = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.99988 1.25C1.58566 1.25 1.24988 1.58579 1.24988 2V14C1.24988 14.4142 1.58566 14.75 1.99988 14.75H5.99988C5.99992 14.75 5.99996 14.75 6 14.75H14C14.4142 14.75 14.75 14.4142 14.75 14V2C14.75 1.58579 14.4142 1.25 14 1.25H6C5.99996 1.25 5.99992 1.25 5.99988 1.25H1.99988ZM2.74988 13.25V2.75H5.24988V13.25H2.74988ZM6.75 13.25V2.75H13.25V13.25H6.75Z" fill="#1B2738"/>
  </svg>
)

const Close = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.5303 4.53025C20.8232 4.23736 20.8232 3.76249 20.5303 3.46959C20.2374 3.1767 19.7625 3.1767 19.4696 3.46959L12 10.9392L4.53033 3.46959C4.23743 3.1767 3.76256 3.1767 3.46967 3.46959C3.17677 3.76249 3.17677 4.23736 3.46967 4.53025L10.9393 11.9999L3.46961 19.4696C3.17672 19.7625 3.17672 20.2374 3.46961 20.5303C3.7625 20.8231 4.23738 20.8231 4.53027 20.5303L12 13.0606L19.4697 20.5303C19.7626 20.8231 20.2374 20.8231 20.5303 20.5303C20.8232 20.2374 20.8232 19.7625 20.5303 19.4696L13.0606 11.9999L20.5303 4.53025Z" />
  </svg>
)

const StyledToggleSideNavWrapper = styled('div')`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #2771B6;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.16);
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000000 !important;
  display: none;
  transition: all .3s ease-in-out;
  svg {
    width: 24px;
    height: 24px;
    path {
      fill: #fff;
    }
  }
  @media(max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.16);
  }
`;

const translationOptionsFlags = {
  "en": usFlag,
  "zh": chinaFlag,
  "ja": japanFlag,
}

const Layout = ({ children, location }) => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [isSubNavShow, setIsSubNavShow] = useState(false);
  const [isLanguageShow, setIsLanguageShow] = useState(false);
  const [isLanguageShowMobile, setIsLanguageShowMobile] = useState(false);
  const [isAliId, setIsAliId] = useState(false);
  const [isLocalSideBarSubscribe, setIsLocalSideBarSubscribe] = useState(false);
  const [isShowSubscribe, setIsShowSubscribe] = useState(true);

  const wrapperRef = useRef(null);
  const mobileWrapperRef = useRef(null);

  const onSubmitCB = () => {
    if (typeof window !== undefined) {
      window.localStorage.setItem("sideBarSubscribeConsent", "true");
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchAliId = searchParams.get("aliId");
    if (searchAliId || searchAliId === "") {
      setIsAliId(true);
    }
    if (typeof window !== undefined) {
      if ("localStorage" in window && window.localStorage && "getItem" in window.localStorage) {
        const sideBarSubscribeConsent = window.localStorage.getItem("sideBarSubscribeConsent");
        if (sideBarSubscribeConsent) {
          setIsLocalSideBarSubscribe(true);
        }
      }
    }
  }, [location.search]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    document.addEventListener("click", handleMobileClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
      document.removeEventListener("click", handleMobileClickOutside, false);
    };
  }, []);
  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      var x = document.getElementById("language-dropdown");
      if (x.className === "languageDropDownWrapper showList") {
        x.className = "languageDropDownWrapper";
        setIsLanguageShow(false);
      }
    }
  };
  const handleMobileClickOutside = event => {
    if (mobileWrapperRef.current && !mobileWrapperRef.current.contains(event.target)) {
      var x = document.getElementById("language-dropdown-mobile");
      if (x.className === "languageDropDownWrapper showList") {
        x.className = "languageDropDownWrapper";
        setIsLanguageShowMobile(false);
      }
    }
  };
  return (
    <ThemeProvider location={location}>
      <MDXProvider components={mdxComponents}>
        <Wrapper className={((toggleSideBar) ? " mainWrapperCollapse" : "")}>
          <StyledToggleSideNavWrapper onClick={()=>{setIsSubNavShow(!isSubNavShow);setToggleSideBar(false);}}>
            {
              isSubNavShow ? (
                <Close />
              ) : (
                <MenuNavToggle/>
              )
            }
          </StyledToggleSideNavWrapper>
          <LeftSideBarWidth className={((toggleSideBar) ? " sidebarWrapperCollapse" : "") + ((isSubNavShow) ? " translateXZero" : "")}>
            <div className={"mainSideBarToggle" + ((toggleSideBar) ? " mainSideBarTogglePos" : "")}
              role="presentation"
              onClick={() => {
                setToggleSideBar(!toggleSideBar);
                setIsSubNavShow(false);
              }}
            >
              <MenuNavToggleSmall />
              {
                toggleSideBar ? (
                  <div className="navigation">
                    <div className="desc font_600">Navigation</div>
                  </div>
                ) : null
              }
            </div>
            {
              !toggleSideBar ? (
                <div className="p16">
                  <Sidebar location={location} isShowSubscribe ={isShowSubscribe}/>
                </div>
              ) : null
            }
            <div className="alignSelfEnd">

                <LanguageWrapper ref={mobileWrapperRef} className="showMobile">
                  <div className="languageWrapper">
                    {!!config.language?.code && (
                      <button className="languageBgn" onClick={()=>setIsLanguageShowMobile(prevShow => !prevShow)}>
                        <img src={translationOptionsFlags[config.language?.code]} alt={`${config.language?.name} Flag`} />{config.language?.name}
                      </button>
                    )}
                    <div className="githubStars">
                      <GitHubButton
                        href="https://github.com/hasura/learn-graphql"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Star @hasura on GitHub"
                      >
                        Star
                      </GitHubButton>
                    </div>
                    {!!config.language?.code && (
                      <div id="language-dropdown-mobile" className={"languageDropDownWrapper" + ((isLanguageShowMobile) ? " showList" : "")}>
                        <ul>
                          {config.language?.translations.map(translation => (
                            <li key={translation.code}>
                              <a href={translation.link}>
                                <img src={translationOptionsFlags[translation.code]} alt={`${translation.name} Flag`} />
                                <span>{translation.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </LanguageWrapper>

              {
                !toggleSideBar ? (
                  <div className="sideBarNewsletterWrapper">
                    <div className="closeBtn"
                      role="button"
                      tabIndex="0"
                      onClick={()=>setIsShowSubscribe(prevIsSubscribe=>!prevIsSubscribe)}
                    >
                      <OpenedSvg className={((isShowSubscribe) ? "" : "rotateImg")}/>
                    </div>
                  {
                    isAliId && isLocalSideBarSubscribe ? (
                      <div className="desc">Thank you for subscribing to the Hasura Newsletter!</div>
                    ) : (
                      <>
                      <div className="desc font_600">{config.newsletter?.ebookAvailable ? "Download tutorial as e-book ⚡️" : "Sign up for Hasura Newsletter"}</div>
                      {
                        isShowSubscribe ? (
                          <MarketoForm
                            onSubmitCB={onSubmitCB}
                            formId={config.newsletter?.ebookAvailable ? "1244" : "1079"}
                            marketoHost={marketoHost}
                            id="631-HMN-492"
                            styleClass="marketoFormWrapper sideBarSubscribeWrapper"
                          />
                        ) : null
                      }
                      </>
                    )
                  }
                  </div>
                ) : null
              }
            </div>
          </LeftSideBarWidth>
          <Content className={((toggleSideBar) ? "learnAsideWrapperPos" : "")}>
            <MaxWidth>{children}</MaxWidth>
          </Content>
          {
            !toggleSideBar ? (
              <RightSideBarWidth>
                  <LanguageWrapper ref={wrapperRef}>
                    <div className="languageWrapper">
                      {!!config.language?.code && (
                        <button className="languageBgn" onClick={()=>setIsLanguageShow(prevShow => !prevShow)}>
                          <img src={translationOptionsFlags[config.language?.code]} alt={`${config.language?.name} Flag`} />{config.language?.name}
                        </button>
                      )}
                      <div className="githubStars">
                        <GitHubButton
                          href="https://github.com/hasura/learn-graphql"
                          data-size="large"
                          data-show-count="true"
                          aria-label="Star @hasura on GitHub"
                        >
                          Star
                        </GitHubButton>
                      </div>
                      {!!config.language?.code && (
                      <div id="language-dropdown" className={"languageDropDownWrapper" + ((isLanguageShow) ? " showList" : "")}>
                        <ul>
                          {config.language?.translations.map(translation => (
                            <li key={translation.code}>
                              <a href={translation.link}>
                                <img src={translationOptionsFlags[translation.code]} alt={`${translation.name} Flag`} />
                                <span>{translation.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      )}
                    </div>
                  </LanguageWrapper>

                <RightSidebar location={location} />
              </RightSideBarWidth>
            ) : null
          }
        </Wrapper>
      </MDXProvider>
    </ThemeProvider>
  )
}
export default Layout;
