import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import './styles.css';
import config from '../../config';

import openNew from "./images/open-new.svg";

const hasuraBlogState = [
  {
    linkContent: "Modern GraphQL examples with strings, compilers, and SDKs",
    linkUrl: "https://hasura.io/blog/graphql-examples/",
  },
  {
    linkContent: "Top ways to write a custom GraphQL Server with production ready features",
    linkUrl: "https://hasura.io/blog/top-ways-to-write-custom-graphql-server-production-ready-features/",
  },
  {
    linkContent: "A REST View of GraphQL",
    linkUrl: "https://hasura.io/blog/rest-view-of-graphql/",
  },
]

const Sidebar = styled('aside')`
  width: 100%;
  background-color: #fff;
  overflow: auto;
  position: fixed;
  display: grid;
  padding-left: 0px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

// eslint-disable-next-line no-unused-vars
const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} />
    </li>
  );
})`
  list-style: none;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${(props) => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: #005C8F;
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

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      let finalNavItems;

      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        allMdx.edges.map((item) => {
          let innerItems;

          if (item !== undefined) {
            if (
              item.node.fields.slug === location.pathname ||
              config.gatsby.pathPrefix + item.node.fields.slug === location.pathname
            ) {
              if (item.node.tableOfContents.items) {
                innerItems = item.node.tableOfContents.items.map((innerItem, index) => {
                  const itemId = innerItem.title
                    ? innerItem.title.replace(/\s+/g, '').toLowerCase()
                    : '#';

                  return (
                    <ListItem key={index} to={`#${itemId}`} level={1}>
                      {innerItem.title}
                    </ListItem>
                  );
                });
              }
            }
          }
          if (innerItems) {
            finalNavItems = innerItems;
          }
        });
      }

      if (finalNavItems && finalNavItems.length) {
        return (
          <Sidebar>
            <ul className="rightSideBarUL">
              <li className="rightSideTitle">CONTENTS</li>
              {finalNavItems}
            </ul>
            <ul className="blogLinkWrapper">
              <li className="rightSideTitle">from the hasura blog</li>
              {
                hasuraBlogState.map((item, index) => (
                  <li key={index}><img src={openNew} alt="Open new window" /><a href={item.linkUrl} target="_blank">{item.linkContent}</a></li>
                ))
              }
            </ul>
          </Sidebar>
        );
      } else {
        return (
          <Sidebar>
            <ul></ul>
          </Sidebar>
        );
      }
    }}
  />
);

export default SidebarLayout;
