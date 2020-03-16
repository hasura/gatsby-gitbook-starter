import React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './mdxComponents';
import ThemeProvider from './theme/themeProvider';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  display: flex;
  flex-grow: 1;
  margin: 0px 88px;
  padding-top: 3rem;
  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    padding-top: 3rem;
  }
`;

const MaxWidth = styled('div')`
  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

const LeftSideBarWidth = styled('div')`
  width: 298px;
`;

const RightSideBarWidth = styled('div')`
  width: 224px;
`;

const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        <LeftSideBarWidth className={'hiddenMobile'}>
          <Sidebar location={location} />
        </LeftSideBarWidth>
        <Content>
          <MaxWidth>{children}</MaxWidth>
        </Content>
        <RightSideBarWidth className={'hiddenMobile'}>
          <RightSidebar location={location} />
        </RightSideBarWidth>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
