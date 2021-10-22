import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import styled from '@emotion/styled';
import { Layout, Link } from '../components';
import NextPrevious from '../components/NextPrevious';
import SubHeader from '../components/SubHeader';
import FloatingSubscribeNewsletter from '../components/FloatingSubscribeNewsletter';
import '../components/styles.css';
import config from '../../config';
import gitHub from '../components/images/github.svg';

const forcedNavOrder = config.sidebar.forcedNavOrder;

const Edit = styled('div')`
  /* padding: 1rem 1.5rem; */
  display: flex;
  text-align: right;

  a {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    text-decoration: none;
    color: #1B2738;

    /* border: 1px solid rgb(211, 220, 228); */
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.2s ease-out 0s;
    text-decoration: none;
    color: rgb(36, 42, 49);
    /* background-color: rgb(255, 255, 255);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    height: 30px;
    padding: 5px 16px; */
    .arrow {
      margin-left: 6px;
      display: inline-block;
      transition: all .3s ease-in-out;
    }
    &:hover {
      /* background-color: rgb(245, 247, 249); */
      .arrow {
        transform: translateX(5px);
      }
    }
  }
`;

export default class MDXRuntimeTest extends Component {
  render() {
    const { data, location } = this.props;

    if (!data) {
      return this.props.children;
    }
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { docsLocation, title },
      },
    } = data;

    const navItems = allMdx.edges
      .map(({ node }) => node.fields.slug)
      .filter((slug) => slug !== '/')
      .sort()
      .reduce(
        (acc, cur) => {
          if (forcedNavOrder.find((url) => url === cur)) {
            return { ...acc, [cur]: [cur] };
          }

          let prefix = cur.split('/')[1];

          if (config.gatsby && config.gatsby.trailingSlash) {
            prefix = prefix + '/';
          }

          if (prefix && forcedNavOrder.find((url) => url === `/${prefix}`)) {
            return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
          } else {
            return { ...acc, items: [...acc.items, cur] };
          }
        },
        { items: [] }
      );

    const nav = forcedNavOrder
      .reduce((acc, cur) => {
        return acc.concat(navItems[cur]);
      }, [])
      .concat(navItems.items)
      .map((slug) => {
        if (slug) {
          const { node } = allMdx.edges.find(({ node }) => node.fields.slug === slug);

          return { title: node.fields.title, url: node.fields.slug };
        }
      });

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle;

    const metaDescription = mdx.frontmatter.metaDescription;

    let canonicalUrl = config.gatsby.siteUrl;

    canonicalUrl =
      config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx.fields.slug;

    // frontmatter canonical takes precedence
    canonicalUrl = mdx.frontmatter.canonicalUrl ? mdx.frontmatter.canonicalUrl : canonicalUrl;
    return (
      <Layout {...this.props}>
        <Helmet>
          {metaTitle ? <title>{metaTitle}</title> : null}
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? <meta name="description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="twitter:title" content={metaTitle} /> : null}
          {metaDescription ? (
            <meta property="twitter:description" content={metaDescription} />
          ) : null}
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <SubHeader location={location} />
        <div className="titleWrapper">
          <h1 className="title">{mdx.fields.title}</h1>
        </div>
        <div className="mainWrapper">
          <MDXRenderer>{mdx.body}</MDXRenderer>
          {/*
          <FloatingSubscribeNewsletter title={mdx.fields.title} canonicalUrl={canonicalUrl} location={location} />
          */}
        </div>
        <Edit className="mobileView">
          {docsLocation && (
            <Link className="gitBtn" to={`${docsLocation}/${mdx.parent.relativePath}`}>
              <img src={gitHub} alt='Github logo' /> Edit on GitHub<div className="arrow">{"→"}</div>
            </Link>
          )}
        </Edit>
        <div className="addPaddTopBottom">
          <NextPrevious mdx={mdx} nav={nav} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
        canonicalUrl
      }
    }
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
`;
