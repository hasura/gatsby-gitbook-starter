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
  loader: () => import('./UnifiedSearch/index'),
  loading: LoadingProvider,
});

function myFunction() {
  var x = document.getElementById('subnavbar');

  if (x.className === 'topsubnav') {
    x.className += ' subResponsive';
  } else {
    x.className = 'topsubnav';
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
      const [isArrowDown, setIsArrowDown] = useState(false);

      return (
        <div className='posStickey'>
          <div className={'navBarWrapper'}>
            <div className='containerWrapper'>
              <nav className={'navBarDefault'}>
                <div className={'navBarHeader hiddenMobile'}>
                  <Link to={finalLogoLink} className={'navBarBrand'}>
                    <img
                      className={'img-responsive displayInline'}
                      src={logo.image !== '' ? logo.image : logoImg}
                      alt='logo'
                    />
                  </Link>
                  <div
                    className={'headerTitle displayInline'}
                    dangerouslySetInnerHTML={{ __html: headerTitle }}
                  />
                </div>
                <div className="subnavWithSearch">
                  <div role="button" tabIndex="0" onClick={()=>{myFunction();setIsArrowDown(!isArrowDown)}} className={'subNavBarToggle'} className='tableContent showMobileView'>
                    <span>
                      table of contents
                    </span>
                    <img className={((isArrowDown) ? 'rotateImg' : '')} src={arrow} alt='Arrow' />
                  </div>
                  {isSearchEnabled ? <LoadableComponent collapse={true} indices={searchIndices} /> : null}
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
                    <li className='toolTipPos'>
                      <a href={helpUrl}>
                        <img src={discord} alt='discord' />
                        <div className='toolTip'>
                          Join Hasura Discord
                        </div>
                      </a>
                    </li>
                  ) : null}
                  {tweetText !== '' ? (
                    <li className='toolTipPos'>
                      <a
                        href={'https://twitter.com/intent/tweet?&text=' + tweetText}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img className={'shareIcon'} src={twitter} alt='Twitter' />
                        <div className='toolTip'>
                          Tweet about this course
                        </div>
                      </a>
                    </li>
                  ) : null}
                </ul>
                <div id="subnavbar" className={'topsubnav'}>
                  <div className={'subNavVisibleMobile'}>
                    <Sidebar location={location} />
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className={'navBarHeader mobileBreadCrumb showMobileView'}>
            <Link to={finalLogoLink} className={'navBarBrand'}>
              <img
                className={'img-responsive displayInline'}
                src={logo.image !== '' ? logo.image : logoImg}
                alt='logo'
              />
            </Link>
            <div
              className={'headerTitle displayInline'}
              dangerouslySetInnerHTML={{ __html: headerTitle }}
            />
          </div>
        </div>
      );
    }}
  />
);

export default Header;
