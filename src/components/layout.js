import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';
import ThemeProvider from './themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';

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
  padding: 16px;
  min-height: calc(100vh - 72px);
  height: calc(100vh - 72px);
  border-right: 1px solid rgb(214, 222, 230);
  border-bottom: 1px solid rgb(214, 222, 230);
  display: grid;
  position: fixed;
  top: 72px;
  left: 0px;
  transition: all 0.3s ease-in-out 0s;
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
      width: 16px;
      height: 16px;
      viewBox: 0 0 16px 16px;
      path {
        fill: #0079BD;
      }
    }
    .navigation {
      position: absolute;
      left: 42px;
      top: 8px;
    }
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
const MenuNavToggle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H9H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H9H3ZM9.75 3.75V20.25H20.25V3.75H9.75ZM8.25 3.75H3.75V20.25H8.25V3.75Z"/>
  </svg>

)

const Close = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5303 4.53025C20.8232 4.23736 20.8232 3.76249 20.5303 3.46959C20.2374 3.1767 19.7625 3.1767 19.4696 3.46959L12 10.9392L4.53033 3.46959C4.23743 3.1767 3.76256 3.1767 3.46967 3.46959C3.17677 3.76249 3.17677 4.23736 3.46967 4.53025L10.9393 11.9999L3.46961 19.4696C3.17672 19.7625 3.17672 20.2374 3.46961 20.5303C3.7625 20.8231 4.23738 20.8231 4.53027 20.5303L12 13.0606L19.4697 20.5303C19.7626 20.8231 20.2374 20.8231 20.5303 20.5303C20.8232 20.2374 20.8232 19.7625 20.5303 19.4696L13.0606 11.9999L20.5303 4.53025Z" />
  </svg>
)

const StyledToggleSideNavWrapper = styled.div`
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
const Layout = ({ children, location }) => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [isSubNavShow, setIsSubNavShow] = useState(false);
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
              <MenuNavToggle />
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
                <Sidebar location={location}/>
              ) : null
            }
          </LeftSideBarWidth>
          <Content className={((toggleSideBar) ? "learnAsideWrapperPos" : "")}>
            <MaxWidth>{children}</MaxWidth>
          </Content>
          {
            !toggleSideBar ? (
              <RightSideBarWidth>
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
