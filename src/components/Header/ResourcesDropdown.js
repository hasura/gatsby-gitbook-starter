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
import dataHub from "../images/data-hub.svg";
import blogIcon from '../images/icon-blog.svg';
import eventsIcon from "../images/star3.svg";
import './navproduct.scss';

const devResourcesList = [
  {
    imgSrc: tutorialsIcon,
    title: 'Learn',
    externalLink: true,
    linkUrl: 'https://hasura.io/learn/',
  },
  {
    imgSrc: blogIcon,
    title: 'Blog',
    externalLink: true,
    linkUrl: 'https://hasura.io/blog/',
  },
  {
    imgSrc: communityIcon,
    title: "Community",
    externalLink: true,
    linkUrl: 'https://hasura.io/community/',
  },
  {
    imgSrc: eventsIcon,
    title: 'Events',
    externalLink: true,
    linkUrl: 'https://hasura.io/events/',
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
  {
    imgSrc: dataHub,
    title: "Data Hub",
    externalLink: true,
    linkUrl: "https://hasura.io/data-hub/",
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
          <a
            href="https://techcrunch.com/2022/02/22/graphql-developer-platform-hasura-raises-100m-series-c/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="navListAnnouncement">
              <div className="flex-heading">
                <h4 className="mb-24">NEWS</h4>
                <div className="nav-link">
                  Read More <img src={arrowBlue} alt="Arrow" className="arrow-img" />
                </div>
              </div>
              <h2>GraphQL developer platform Hasura raises $100M Series C</h2>
              <h4 className="zero-m">Feb 22, 2022</h4>
            </div>
          </a>
          <hr className="news-section-line-break" />
          <a href="https://hasura.io/blog/announcing-hasura-v2-2-0/" rel="noopener noreferrer">
            <div className="navListAnnouncement">
              <div className="flex-heading">
                <h4 className="mb-24">NEWS</h4>
                <div className="nav-link">
                  Read More <img src={arrowBlue} alt="Arrow" className="arrow-img" />
                </div>
              </div>
              <h2>Announcing Hasura GraphQL Engine v2.2.0</h2>
              <h4 className="zero-m">Feb 2, 2022</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
