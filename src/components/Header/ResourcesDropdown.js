import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import { trackGAEvents } from '../trackGA';
import arrowBlue from '../images/arrow-blue.svg';
import tutorialsIcon from '../images/icon-tutorials.svg';
import casestudiesIcon from '../images/icon-userstudies.svg';
import workshopIcon from '../images/icon-workshop.svg';
import communityIcon from '../images/icon-community.svg';
import contributorIcon from '../images/icon-contributions.svg';
// import eventIcon from "../images/icon-event.svg";
import graphqlHubIcon from '../images/icon-graphql-hub.svg';
import helpIcon from '../images/icon-help.svg';
import './navproduct.scss';

const devResourcesList = [
  {
    imgSrc: tutorialsIcon,
    title: 'Courses & Tutorials',
    externalLink: true,
    linkUrl: 'https://hasura.io/learn/',
  },
  {
    imgSrc: communityIcon,
    title: 'Community Events',
    externalLink: true,
    linkUrl: 'https://hasura.io/events/',
  },
  {
    imgSrc: contributorIcon,
    title: 'Contributor Program',
    externalLink: true,
    linkUrl: 'https://hasura.io/community/contributor-program/',
  },
  {
    imgSrc: helpIcon,
    title: 'Help',
    externalLink: true,
    linkUrl: 'https://hasura.io/help/',
  },
];

const miscResourcesList = [
  {
    imgSrc: casestudiesIcon,
    title: 'Case Studies',
    externalLink: true,
    linkUrl: 'https://hasura.io/case-studies/',
  },
  {
    imgSrc: graphqlHubIcon,
    title: 'GraphQL Hub',
    externalLink: true,
    linkUrl: 'https://hasura.io/graphql/',
  },
  {
    imgSrc: workshopIcon,
    title: 'Why Hasura',
    externalLink: true,
    linkUrl: 'https://hasura.io/why-hasura/',
  },
];

const scrollToTop = () => {
  if (typeof window !== undefined) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

export const ResourcesDropdown = () => {
  const getDevResources = devResourcesList.map((nav, index) => {
    return (
      <Fragment key={index}>
        {nav.externalLink ? (
          <a href={nav.linkUrl} onClick={() => trackGAEvents('Website', 'HeaderClick', nav.title)}>
            <div className="navList dropdown-hover-effect-div">
              <div className="navListImg">
                <img src={nav.imgSrc} alt="icon" />
              </div>
              <h2>{nav.title}</h2>
            </div>
          </a>
        ) : (
          <Link
            to={nav.linkUrl}
            onClick={() => {
              trackGAEvents('Website', 'HeaderClick', nav.title);
              scrollToTop();
            }}
          >
            <div className="navList dropdown-hover-effect-div">
              <div className="navListImg">
                <img src={nav.imgSrc} alt="icon" />
              </div>
              <h2>{nav.title}</h2>
            </div>
          </Link>
        )}
      </Fragment>
    );
  });

  const getMiscResources = miscResourcesList.map((nav, index) => {
    return (
      <Fragment key={index}>
        {nav.externalLink ? (
          <a href={nav.linkUrl} onClick={() => trackGAEvents('Website', 'HeaderClick', nav.title)}>
            <div className="navList dropdown-hover-effect-div">
              <div className="navListImg">
                <img src={nav.imgSrc} alt="icon" />
              </div>
              <h2>{nav.title}</h2>
            </div>
          </a>
        ) : (
          <Link
            to={nav.linkUrl}
            onClick={() => {
              trackGAEvents('Website', 'HeaderClick', nav.title);
              scrollToTop();
            }}
          >
            <div className="navList dropdown-hover-effect-div">
              <div className="navListImg">
                <img src={nav.imgSrc} alt="icon" />
              </div>
              <h2>{nav.title}</h2>
            </div>
          </Link>
        )}
      </Fragment>
    );
  });

  return (
    <div className="navDrapdownWrapper resources-dropdown">
      {/* Column 1 */}
      <div className="dropdown-column-section developers-section">
        <h4>LEARNING RESOURCES</h4>
        {getDevResources}
      </div>
      {/* Column 2 */}
      <div
        className="developers-section
      dropdown-column-section"
      >
        <h4 id="m-invisible" style={{ opacity: '0' }}>
          Resources
        </h4>
        {getMiscResources}
      </div>
      {/* Column 3 */}
      <div className="navDrapdownListWrapper">
        <div className="news-div dropdown-column-section">
          <a href="https://hasura.io/blog/graphql-and-the-data-mesh-developer-productivity-in-an-age-of-exploding-data/">
            <div className="navListAnnouncement">
              <div className="flex-heading">
                <h4 className="mb-24">NEWS</h4>
                <div className="nav-link">
                  Read More <img src={arrowBlue} alt="Arrow" className="arrow-img" />
                </div>
              </div>
              <h2>
                GraphQL &amp; the Data Mesh - developer productivity in an age of exploding data
              </h2>
              <h4 className="zero-m">Oct 13, 2021</h4>
            </div>
          </a>
          <hr className="news-section-line-break" />
          <a
            href="https://us02web.zoom.us/meeting/register/tZcscuuorTotG9d9HENmz-XIoRpHUPIihGHK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="navListAnnouncement">
              <div className="flex-heading">
                <h4>Hasura Cloud Office Hours</h4>
                <div className="nav-link">
                  Join In <img src={arrowBlue} alt="Arrow" className="arrow-img" />
                </div>
              </div>
              <h2>
                Join us for Hasura Cloud office hours in November. Every Wednesday at 9:30am PT/
                12:30 pm ET.
              </h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
