import React, { useEffect, useRef, useState, Fragment } from 'react';
import PropTypes from 'prop-types';

import { trackGAEvents } from '../trackGA';
import hasuraLogoColor from '../images/hasura-logo-color.svg';
import hasuraLogoWhite from '../images/hasura-logo-white.svg';
import rightArrowImg from '../images/arrow-right.svg';
import { getUTMPagePathName } from '../../utils/getUTMPagePathName';
import { saTrack } from '../../utils/segmentAnalytics';
import SearchIcon from '../../globals/icons/Search';
import { openMenuBar, scrollToTop } from './helper';
import { ProductDropdown } from './ProductDropdown';
import { ResourcesDropdown } from './ResourcesDropdown';
import SearchOverlay from '../UnifiedSearch/SearchOverlay';
import { GithubWidget } from './GithubButton';

import './header.scss';

const cloudDomain =
  process.env.GATSBY_DEPLOY_ENV === 'production'
    ? 'https://cloud.hasura.io'
    : 'https://cloud.staging-2.hasura-app.io';

const SearchAltIconLearn = ({ isDark }) => (
  <svg
    id="search-alt-icon"
    width="7"
    height="12"
    viewBox="0 0 7 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 16.5L5.96718 1.06173"
      stroke={isDark ? 'white' : '#909DA6'}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = (props) => {
  const path = props.location.pathname;

  const wrapperRef = useRef(null);

  const [showSearch, setShowSearch] = useState(false);

  // const [windowScrollPosition, updateWindowScrollPosition] = useState(null);

  // Mobile
  const [isProductDropDownActive, toggleProductDropdown] = useState(false);

  const [isResourcesDropDownActive, toggleResourcesDropdown] = useState(false);

  const handleSearchWithKeyboard = (e) => {
    if (e.key === '/' || e.key === 'Escape') {
      e.preventDefault();
      if (e.key === '/') return setShowSearch(true);
      if (e.key === 'Escape') return onCloseSearch();
    }

    return null;
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    document.addEventListener('keydown', handleSearchWithKeyboard);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
      document.removeEventListener('keydown', handleSearchWithKeyboard);
    };
  }, [path]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPosition = window.pageYOffset;

  //     updateWindowScrollPosition(currentScrollPosition);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   handleScroll();

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const onCloseSearch = () => setShowSearch(false);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      var x = document.getElementById('navbar');
      var hamberger = document.getElementById('menuClick');
      if (x.className === 'topnav responsive') {
        x.className = 'topnav';
        hamberger.className = 'navBarToggle';
        document.body.style.overflow = null;

        const viewPortElement = document.getElementById('viewport');

        if (viewPortElement) {
          viewPortElement.style.overflow = null;
        }
      }
    }
  };

  const isDark = false;

  const utmPagePathName = getUTMPagePathName(path);

  // const isBoxShadowActive = windowScrollPosition && windowScrollPosition > 60;

  return (
    <Fragment>
      <header
        id="header"
        className={
          isDark
            ? 'DarkModeHeader box-shadow-header positionStickyHeader'
            : 'lightModeHeader box-shadow-header positionStickyHeader'
        }
      >
        <div className="learnHeader">
          <div className="headerWrapper">
            <div id="navBrand" className="navLeft">
              <div className="brand">
                <a href="https://hasura.io/">
                  <img
                    src={isDark ? hasuraLogoWhite : hasuraLogoColor}
                    alt="Hasura Logo"
                    title="Hasura Logo"
                  />
                </a>
              </div>
            </div>
            <div className="navCenter hideMobile">
              <ul className="navBarUL">
                <li className="github-btn-header">
                  <GithubWidget />
                </li>
                <li
                  className="dropDownList"
                  // className=""
                  id="product-nav-dropdown"
                >
                  <a
                    role="button"
                    tabIndex="0"
                    className="dropdown-link-btn"
                    style={{ cursor: 'pointer' }}
                  >
                    Product
                  </a>
                  <div id="product-nav" className="zIndex dropDownContent">
                    <ProductDropdown />
                  </div>
                </li>
                <li className="dropDownList">
                  <a
                    role="button"
                    tabIndex="0"
                    className="dropdown-link-btn"
                    style={{ cursor: 'pointer' }}
                  >
                    Resources
                  </a>
                  <div id="resource-nav" className="zIndex dropDownContent">
                    <ResourcesDropdown />
                  </div>
                </li>
                <li>
                  <a
                    onClick={() => {
                      trackGAEvents('Website', 'HeaderClickMobile', 'Docs');
                    }}
                    href="https://hasura.io/docs/latest/graphql/core/index.html"
                    style={{ textDecoration: 'none' }}
                  >
                    Docs
                  </a>
                </li>
                <li
                  onClick={() => trackGAEvents('Website', 'HeaderClick', 'Pricing')}
                  role="button"
                >
                  <a href="https://hasura.io/pricing/">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="navRight hideMobile">
              <ul className="navBarUL">
                <li
                  className="navBarUL search-icon-learn"
                  onClick={() => {
                    setShowSearch((preShowSearch) => !preShowSearch);
                    // setHideSearchSlow(true);
                    // setShowWriter(false);
                    // setShowMore(false);
                  }}
                >
                  <span>
                    <SearchIcon variant={isDark ? 'white' : 'grey'} size="sm" />
                    Search...
                  </span>
                  <div className="squareBox">
                    <SearchAltIconLearn isDark={isDark} />
                  </div>
                </li>
                <li className="navBarUL navLogIn">
                  <a
                    href={
                      cloudDomain +
                      `/login?pg=${utmPagePathName}&plcmt=header&cta=log-in&tech=default`
                    }
                    onClick={() => {
                      trackGAEvents('Website', 'HeaderClick', 'Log In');
                      saTrack('Clicked LOG IN', {
                        placement: 'header',
                        cta: 'LOG IN',
                        page: utmPagePathName,
                        screen_size: 'desktop',
                      });
                    }}
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href={
                      cloudDomain +
                      `/signup?pg=${utmPagePathName}&plcmt=header&cta=try-hasura&tech=default`
                    }
                    onClick={() => {
                      trackGAEvents('Website', 'HeaderClick', 'Try Hasura');
                      saTrack('Clicked Get Started', {
                        placement: 'header',
                        cta: 'Get Started',
                        page: utmPagePathName,
                        screen_size: 'desktop',
                      });
                    }}
                  >
                    <button className="hasura-btn hasura-btn-sm hasura-blue-btn">
                      Get Started
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Section  *******************/}
        <div id="navbar" className="topnav" ref={wrapperRef} style={{ height: `50px` }}>
          <div id="navbar" className="topnav" ref={wrapperRef} style={{ height: '50px' }}>
            <div className="navBarToggleBg">
              <div
                className="navBarToggle search-icon"
                onClick={() => {
                  setShowSearch((preShowSearch) => !preShowSearch);
                }}
              >
                <SearchIcon variant={isDark ? 'white' : 'grey100'} size="sm" />
              </div>
              <span
                className="navBarToggle"
                aria-label="button"
                role="button"
                tabIndex="0"
                onClick={() => openMenuBar()}
                id="menuClick"
              >
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
              </span>
            </div>
            {/* Mobile Content  ********** */}
            <div className="visibleMobile">
              <div className="mobileNavListWrapper">
                <div>
                  <button
                    onClick={() => {
                      toggleProductDropdown(!isProductDropDownActive);
                      trackGAEvents('Website', 'MobileClick', 'Products');
                    }}
                    className={
                      isProductDropDownActive
                        ? 'hasura-btn hasura-btn-md   hasura-light-gray-btn'
                        : 'hasura-btn hasura-btn-md hasura-light-gray-btn grey-border'
                    }
                  >
                    Product{' '}
                    <img
                      src={rightArrowImg}
                      alt="right-arrow"
                      className={isProductDropDownActive ? 'rotate-down' : ''}
                    />
                  </button>
                  {isProductDropDownActive && <ProductDropdown />}
                  <button
                    onClick={() => {
                      toggleResourcesDropdown(!isResourcesDropDownActive);
                      trackGAEvents('Website', 'MobileClick', 'Resources');
                    }}
                    className={
                      isResourcesDropDownActive
                        ? 'hasura-btn hasura-btn-md hasura-light-gray-btn'
                        : 'hasura-btn hasura-btn-md hasura-light-gray-btn grey-border'
                    }
                  >
                    Resources{' '}
                    <img
                      src={rightArrowImg}
                      className={isResourcesDropDownActive ? 'rotate-down' : ''}
                      alt="right-arrow"
                    />
                  </button>
                  {isResourcesDropDownActive && <ResourcesDropdown />}
                  <a
                    onClick={() => {
                      trackGAEvents('Website', 'MobileClick', 'Docs');
                    }}
                    href="https://hasura.io/docs/latest/graphql/core/index.html"
                  >
                    <button className="hasura-btn hasura-btn-md hasura-light-gray-btn grey-border">
                      Docs
                    </button>
                  </a>
                  <a
                    href="https://hasura.io/pricing/"
                    onClick={() => {
                      trackGAEvents('Website', 'MobileClick', 'Pricing');
                      scrollToTop();
                    }}
                  >
                    <button className="hasura-btn hasura-btn-md hasura-light-gray-btn grey-border">
                      Pricing
                    </button>
                  </a>
                  <a
                    href="https://hasura.io/contact-us/?type=hasuraenterprise"
                    onClick={() => {
                      trackGAEvents('Website', 'MobileClick', 'Contact Us');
                    }}
                  >
                    <button className="hasura-btn hasura-btn-md hasura-light-gray-btn grey-border">
                      Contact Sales
                      <span className="mobile-github-btn-div">
                        <GithubWidget />
                      </span>
                    </button>
                  </a>
                </div>
                <div className="m-get-started" id="mobile-header-cta">
                  <a
                    href={
                      cloudDomain +
                      `/signup?pg=${utmPagePathName}&plcmt=header&cta=try-hasura&tech=default`
                    }
                    onClick={() => {
                      trackGAEvents('Website', 'MobileClick', 'Try Hasura');
                      saTrack('Clicked Get Started', {
                        placement: 'header',
                        cta: 'Get Started',
                        page: utmPagePathName,
                        screen_size: 'tab/mobile',
                      });
                    }}
                  >
                    <button className="hasura-btn hasura-btn-md hasura-blue-btn">
                      Get Started
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchOverlay showSearch={showSearch} onCloseSearch={onCloseSearch} />
    </Fragment>
  );
};

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
