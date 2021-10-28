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
            <li className="active titleNav" onClick={()=>setIsLearn(!isLearn)}><a>{isLearn ? <OpenedSvg /> : <ClosedSvg />}Learn</a></li>
            {
              isLearn ? <Tree edges={allMdx.edges} /> : null
            }

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
