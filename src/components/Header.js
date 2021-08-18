import { Link, StaticQuery, graphql } from "gatsby";
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { trackGAEvents } from "./trackGA";
import ResourcesNav from "./resourcesnav";
import "./header.scss";
import hasuraLogoColor from "./images/hasura-logo-color.svg";
import hasuraLogoWhite from "./images/hasura-logo-white.svg";
import { getUTMPagePathName } from "../utils/getUTMPagePathName";
function openMenuBar() {
  var x = document.getElementById("navbar");
  var hamberger = document.getElementById("menuClick");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.body.style.overflow = "hidden";
    document.getElementById("viewport").style.overflow = "hidden";
    hamberger.className += " open";
  } else {
    x.className = "topnav";
    hamberger.className = "navBarToggle";
    document.body.style.overflow = null;
    document.getElementById("viewport").style.overflow = null;
  }
}
const Header = props => {
  const wrapperRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);
  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      var x = document.getElementById("navbar");
      var hamberger = document.getElementById("menuClick");
      if (x.className === "topnav responsive") {
        x.className = "topnav";
        hamberger.className = "navBarToggle";
        document.body.style.overflow = null;
        document.getElementById("viewport").style.overflow = null;
      }
    }
  };

  const utmPagePathName = getUTMPagePathName(props.location?.pathname);
  return (
    <header id="header" className="lightModeHeader">
      <div className="containerWrapper">
        <div className="headerWrapper">
          <div id="navBrand" className="navLeft">
            <div className="brand">
              <a href="https://hasura.io/">
                <img src={hasuraLogoColor} alt="Hasura Logo" title="Hasura Logo" />
              </a>
            </div>
          </div>
          <div className="navCenter hideMobile">
            <ul className="navBarUL m-nav-t">
              <li>
                <a
                  href="https://hasura.io/products/"
                  onClick={() => trackGAEvents("Learn course", "HeaderClick", "Products")}
                >
                  PRODUCTS
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    trackGAEvents("Learn course", "HeaderClickMobile", "Docs");
                  }}
                  href="https://hasura.io/docs/latest/graphql/core/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  DOCS
                </a>
              </li>
              <li className="dropDownList">
                {/* eslint-disable-next-line */}
                <a role="button" tabIndex="0">
                  RESOURCES
                  {/* <div className="dropDownArrow"></div> */}
                </a>
                <div id="resource-nav" className="zIndex dropDownContent">
                  <ResourcesNav />
                </div>
              </li>
              <li>
                <a
                  href="https://hasura.io/pricing/"
                  onClick={() => trackGAEvents("Learn course", "HeaderClick", "Pricing")}
                >
                  PRICING
                </a>
              </li>
            </ul>
          </div>
          <div className="navRight hideMobile">
            <ul className="navBarUL">
              <li className='m-nav-t navLogIn'>
                <a
                  href={`https://cloud.hasura.io/login?pg=${utmPagePathName}&plcmt=header&cta=log-in&tech=default`}
                  onClick={() => trackGAEvents("Learn course", "HeaderClick", "Log In")}
                >
                  LOG IN
                </a>
              </li>
              <li>
                <a
                  href="https://hasura.io/contact-us/?type=hasuraenterprise"
                  onClick={() => trackGAEvents("Learn course", "HeaderClick", "Contact Us")}
                >
                  <button className="hasura-btn hasura-btn-sm hasura-gray-btn">CONTACT SALES</button>
                </a>
              </li>
              <li>
                <a
                  href={`https://cloud.hasura.io/signup?pg=${utmPagePathName}&plcmt=header&cta=try-hasura&tech=default`}
                  onClick={() => trackGAEvents("Learn course", "HeaderClick", "Try Hasura")}
                >
                  <button className="hasura-btn hasura-btn-sm hasura-green-btn">GET STARTED NOW</button>
                </a>
              </li>
            </ul>
          </div>
          <div id="navbar" className="topnav" ref={wrapperRef}>
            <div className="navBarToggleBg">
              {/*eslint-disable-next-line*/}
              <span
                className="navBarToggle"
                aria-label="button"
                role="button"
                tabIndex="0"
                onClick={() => openMenuBar()}
                id="menuClick"
              >
                <span className={"iconBar"}></span>
                <span className={"iconBar"}></span>
                <span className={"iconBar"}></span>
              </span>
            </div>
            <div className="visibleMobile">
              <div className="brand">
                <a href="https://hasura.io/">
                  <img src={hasuraLogoColor} alt="Hasura Logo" title="Hasura Logo" />
                </a>
              </div>
              <div className="mobileNavButtonWrapper">
                <a
                  href={`https://cloud.hasura.io/signup?pg=${utmPagePathName}&plcmt=header&cta=try-hasura&tech=default`}
                  onClick={() => trackGAEvents("Learn course", "MobileClick", "Try Hasura")}
                >
                  <button className="hasura-btn hasura-btn-sm hasura-green-btn">GET STARTED NOW</button>
                </a>
                <a
                  href="https://hasura.io/contact-us/?type=hasuraenterprise"
                  onClick={() => trackGAEvents("Learn course", "MobileClick", "Contact Us")}
                >
                  <button className="hasura-btn hasura-btn-sm hasura-gray-btn">CONTACT SALES</button>
                </a>
              </div>
              <div className='mobileNavListWrapper'>
                <a href="https://hasura.io/products/"
                  onClick={() => trackGAEvents("Learn course", "MobileClick", "Products")}
                >
                  <button className='hasura-btn hasura-btn-md hasura-light-gray-btn'>Products</button>
                </a>
                <a href="https://hasura.io/pricing/"
                  onClick={() => trackGAEvents("Learn course", "MobileClick", "Pricing")}
                >
                  <button className='hasura-btn hasura-btn-md hasura-light-gray-btn'>Pricing</button>
                </a>
                <a
                  onClick={() => {
                    trackGAEvents("Learn course", "MobileClick", "Docs");
                  }}
                  href="https://hasura.io/docs/latest/graphql/core/index.html"
                >
                  <button className='hasura-btn hasura-btn-md hasura-light-gray-btn'>Docs</button>
                </a>
                <a
                  href={`https://cloud.hasura.io/login?pg=${utmPagePathName}&plcmt=header&cta=log-in&tech=default`}
                  onClick={() => trackGAEvents("Learn course", "MobileClick", "Log In")}
                >
                  <button className='hasura-btn hasura-btn-md hasura-light-gray-btn'>LOG IN</button>
                </a>
              </div>
              <ResourcesNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.object,
};
export default Header;
// export default function HeaderWithStars(props) {
//   return (
//     <StaticQuery
//       query={graphql`
//         query {
//           githubStars {
//             stars
//           }
//         }
//       `}
//       render={data => <Header data={data} {...props} />}
//     />
//   );
// }

// export default Header;
