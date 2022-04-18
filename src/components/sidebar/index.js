import React, { useState } from 'react';
import Tree from './tree';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { ExternalLink } from 'react-feather';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import '../styles.css';
import config from '../../../config';

// eslint-disable-next-line no-unused-vars
const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} target="_blank" rel="noopener noreferrer" />
    </li>
  );
})`
  list-style: none;

  a {
    color: #1B2738;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${(props) => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;
    &:hover {
      background-color: #EBF1F6;
    }

    ${(props) =>
      props.active &&
      `
      color: #663399;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;

const LeftArrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.03021 4.03033C8.3231 3.73743 8.3231 3.26256 8.03021 2.96967C7.73731 2.67677 7.26244 2.67677 6.96955 2.96967L2.4695 7.46971C2.17661 7.7626 2.17661 8.23748 2.4695 8.53037L6.96955 13.0304C7.26244 13.3233 7.73731 13.3233 8.03021 13.0304C8.3231 12.7375 8.3231 12.2626 8.03021 11.9698L4.81053 8.75008L12.6665 8.75008C13.0807 8.75008 13.4165 8.41429 13.4165 8.00008C13.4165 7.58587 13.0807 7.25008 12.6665 7.25008L4.81045 7.25008L8.03021 4.03033Z" fill="#1B2738"/>
  </svg>

)

const Sidebar = styled('aside')`
  width: 100%;
  /* background-color: rgb(245, 247, 249); */
  /* border-right: 1px solid #ede7f3; */
  padding-left: 0px;
  padding-right: 0;
  display: grid;
  @media only screen and (max-width: 1023px) {
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 767px) {
    top: 0px;
    padding-left: 0px;
    background-color: #F9FCFF;
    background: #F9FCFF;
    height: auto;
    /* left: 50%;
    margin-left: -50vw; */
    position: relative;
    /* width: 100vw; */
  }
`;

const Divider = styled((props) => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #ede7f3;
  }
`;

const SidebarLayout = ({location, sideBarULdecreaseHt}) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      const [isLearn, setIsLearn] = useState(true);
      return (
        <Sidebar>
          <ul className={'sideBarUL' + ((sideBarULdecreaseHt) ? '' : ' sideBarULHeight')}>
            <li className="active titleNav"><a href="https://hasura.io/learn/"><LeftArrow />Learn</a></li>
            <Tree edges={allMdx.edges} />

            {/*config.sidebar.links && config.sidebar.links.length > 0 && <Divider />}
            {config.sidebar.links.map((link, key) => {
              if (link.link !== '' && link.text !== '') {
                return (
                  <ListItem key={key} to={link.link}>
                    {link.text}
                    {<ExternalLink size={14} />}
                  </ListItem>
                );
              }
            })*/}
          </ul>

        </Sidebar>
      );
    }}
  />
);

export default SidebarLayout;
