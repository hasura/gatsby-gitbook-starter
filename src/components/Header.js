import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Link from './link';
import './styles.css';
import config from '../../config.js';

import Loadable from 'react-loadable';
import LoadingProvider from './mdxComponents/loading';

import help from './images/help.svg';
import logoImg from './images/logo.svg';
import twitter from './images/twitter.svg';

const isSearchEnabled = config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

import Sidebar from './sidebar';

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

function myFunction() {
  var x = document.getElementById('navbar');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

const Header = ({ location }) => (
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

      return (
        <div>
          <div className={'navBarWrapper'}>
            <nav className={'navBarDefault'}>
              <div className={'navBarHeader'}>
                <Link to={finalLogoLink} className={'navBarBrand'}>
                  <img
                    className={'img-responsive displayInline'}
                    src={logo.image !== '' ? logo.image : logoImg}
                    alt={'logo'}
                  />
                </Link>
                <div
                  className={'headerTitle displayInline'}
                  dangerouslySetInnerHTML={{ __html: headerTitle }}
                />
                <span role="button" tabIndex="0" onClick={myFunction} onKeyDown={myFunction} className={'navBarToggle'}>
                  <span className={'iconBar'}></span>
                  <span className={'iconBar'}></span>
                  <span className={'iconBar'}></span>
                </span>
              </div>
              {isSearchEnabled ? (
                <div className={'searchWrapper hiddenMobile navBarUL'}>
                  <LoadableComponent collapse={true} indices={searchIndices} />
                </div>
              ) : null}
              <div id="navbar" className={'topnav'}>
                <div className={'visibleMobile'}>
                  <Sidebar location={location} />
                  <hr />
                  {isSearchEnabled ? (
                    <div className={'searchWrapper'}>
                      <LoadableComponent collapse={true} indices={searchIndices} />
                    </div>
                  ) : null}
                </div>
                <ul className={'navBarUL navBarNav navBarULRight'}>
                  {headerLinks.map((link, key) => {
                    if (link.link !== '' && link.text !== '') {
                      return (
                        <li key={key}>
                          <a
                            className="sidebarLink"
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            dangerouslySetInnerHTML={{ __html: link.text }}
                          />
                        </li>
                      );
                    }
                  })}
                  {helpUrl !== '' ? (
                    <li>
                      <a href={helpUrl}>
                        <img src={help} alt={'Help icon'} />
                      </a>
                    </li>
                  ) : null}
                  {tweetText !== '' || githubUrl !== '' ? (
                    <li className="divider hiddenMobile"></li>
                  ) : null}
                  {tweetText !== '' ? (
                    <li>
                      <a
                        href={'https://twitter.com/intent/tweet?&text=' + tweetText}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img className={'shareIcon'} src={twitter} alt={'Twitter'} />
                      </a>
                    </li>
                  ) : null}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      );
    }}
  />
);

export default Header;
