import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { default as defaultTheme } from './theme';
import SubHeader from './SubHeader';
import Header from './Header';
import Footer from './footer'
// import BannerStripe from "./bannerstripe";
import './styles.css';

export default function ThemeProvider({ children, theme = {}, location }) {
  return (
    <div id="viewport" className="viewport">
      {/* <BannerStripe /> */}
      <Header location={location} />
      <SubHeader location={location} />
      <EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>{children}</EmotionThemeProvider>
      <Footer location = {location} />
    </div>
  );
}
