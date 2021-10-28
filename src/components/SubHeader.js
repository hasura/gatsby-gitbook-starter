import React, {useState} from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Link from './link';
import './styles.css';
import config from '../../config.js';

import Loadable from 'react-loadable';
import LoadingProvider from './mdxComponents/loading';

import discord from './images/discord.svg';
import logoImg from './images/logo.svg';
import twitter from './images/twitter.svg';
import arrow from "./images/arrow-block.svg";
const Header = ({ location, title }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            helpUrl
            tweetText
            logo {
              link
              image
            }
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={(data) => {

      const {
        site: {
          siteMetadata: { headerTitle, githubUrl, helpUrl, tweetText, logo, headerLinks },
        },
      } = data;

      const finalLogoLink = logo.link !== '' ? logo.link : '/';
      const [isArrowDown, setIsArrowDown] = useState(false);
      const breadCrumb = headerTitle + "<img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/chevron-right.svg' alt='Chevron Right' />" + title;
      return (
        <div className="navBarWrapper">
          <nav className="navBarDefault">
            <div className="navBarHeader">
              <Link to={finalLogoLink} className="navBarBrand">
                <img
                  className="img-responsive displayInline"
                  src={logo.image !== '' ? logo.image : logoImg}
                  alt='logo'
                />
              </Link>
              <div
                className="headerTitle displayInline"
                dangerouslySetInnerHTML={{ __html: breadCrumb }}
              />
            </div>
          </nav>
        </div>
      );
    }}
  />
);

export default Header;
