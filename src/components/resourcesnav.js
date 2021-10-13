import React, {Fragment} from "react";
import { Link } from "gatsby";

import { trackGAEvents } from "./trackGA";
import "./navproduct.scss";
import arrowWhite from "./images/arrow-white.svg";
import tutorialsIcon from "./images/icon-tutorials.svg";
import blogIcon from "./images/icon-blog.svg";
import userstudiesIcon from "./images/icon-userstudies.svg";
import eventIcon from "./images/icon-event.svg";
import communityIcon from "./images/icon-community.svg";
import graphqlIcon from "./images/icon-graphql.svg";
import helpIcon from "./images/icon-help.svg";

const navListState = [
  {
    imgSrc: tutorialsIcon,
    title: 'Tutorials',
    desc: 'Real-world GraphQL Tuts',
    linkUrl: 'https://hasura.io/learn/',
    externalLink: true,
  },
  {
    imgSrc: blogIcon,
    title: 'Blog',
    desc: 'Editorials and releases',
    linkUrl: 'https://hasura.io/blog/',
    externalLink: true,
  },
  {
    imgSrc: userstudiesIcon,
    title: 'Case Studies',
    desc: 'Read user case-studies',
    linkUrl: 'https://hasura.io/case-studies/',
    externalLink: true,
  },
  {
    imgSrc: eventIcon,
    title: 'Events',
    desc: 'Workshops, confs and more',
    linkUrl: 'https://hasura.io/events/',
    externalLink: true,
  },
  {
    imgSrc: communityIcon,
    title: 'Contributor Program',
    desc: 'Community and more',
    linkUrl: 'https://hasura.io/community/contributor-program/',
    externalLink: true,
  },
  {
    imgSrc: graphqlIcon,
    title: 'graphql',
    desc: 'The GraphQL hub',
    linkUrl: 'https://hasura.io/graphql/',
    externalLink: true,
  },
  {
    imgSrc: helpIcon,
    title: 'help',
    desc: 'Get expert support',
    linkUrl: 'https://hasura.io/help/',
    externalLink: true,
  },
]
const ResourcesNav = () => {
  const navListWrapper = navListState.map((nav, index) => {
    return (
      <Fragment key={index}>
        {
          nav.externalLink ? (
            <a href={nav.linkUrl}
              onClick={() => trackGAEvents("Blog", "HeaderClick", nav.title)}
            >
              <div className='navList'>
                <div className='navListImg'>
                  <img src={nav.imgSrc} alt='icon' />
                </div>
                <div>
                  <div className='hasura-ibm-plex-nav'>
                    {nav.title}
                  </div>
                  <div className='hasura-ibm-plex-mono-small mobileNavHide'>
                    {nav.desc}
                  </div>
                </div>
              </div>
            </a>
          ) : (
            <Link to={nav.linkUrl}
              onClick={() => trackGAEvents("Blog", "HeaderClick", nav.title)}
            >
              <div className='navList'>
                <div className='navListImg'>
                  <img src={nav.imgSrc} alt='icon' />
                </div>
                <div>
                  <div className='hasura-ibm-plex-nav'>
                    {nav.title}
                  </div>
                  <div className='hasura-ibm-plex-mono-small mobileNavHide'>
                    {nav.desc}
                  </div>
                </div>
              </div>
            </Link>
          )
        }
      </Fragment>
    )
  })
  return (
    <div className="navDrapdownWrapper">
      <div className='containerWrapper'>
        <div className='hasura-ibm-plex-nav mobileNavShow mobileTitleResources'>
          Resources
        </div>
        <div className='navDrapdownListWrapper'>
          <div className='navListWrapper'>
            {navListWrapper}
          </div>
          <div>
            <a href='https://hasura.io/learn/'>
              <div className='navListAnnouncement navLearnBg mb-32'>
                <div className='hasura-ibm-plex-article-desc'>
                  Learn with Hasura
                  <div className='arrow'>
                    <img src={arrowWhite} alt='Arrow' />
                  </div>
                </div>
                <div className='hasura-ibm-plex-mono'>
                  Get started with GraphQL and Hasura from our selection of over 15 courses
                </div>
              </div>
            </a>
            <a
              href="https://us02web.zoom.us/meeting/register/tZUvduuspzksGdXb_Kp2u8cNJQQ5JGxXVOrg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="navListAnnouncement navDataBaseBg">
                <div className="hasura-ibm-plex-article-desc">
                  Hasura Cloud Office Hours
                  <div className="arrow">
                    <img src={arrowWhite} alt="Arrow" />
                  </div>
                </div>
                <div className="hasura-ibm-plex-mono">
                  Join us for Hasura Cloud office hours in October. Every Wednesday at 9:30am PT/
                  12:30 pm ET.
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesNav;
