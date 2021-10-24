import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { default as defaultTheme } from './theme';
// import SubHeader from './SubHeader';
import Header from '../components/Header';
import Footer from './footer';
import { AnnouncementBanner } from '../components/AnnouncementBanner';
import './styles.css';

export default function ThemeProvider({ children, theme = {}, location }) {
  return (
    <div id="viewport" className="viewport">
      <AnnouncementBanner />
      <Header location={location} />
      {/* <SubHeader location={location} /> */}
      <EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>{children}</EmotionThemeProvider>
      <Footer location={location} />
    </div>
  );
}
