import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import styled from '@emotion/styled';
import { Layout, Link } from '../components';
import NextPrevious from '../components/NextPrevious';
import SubHeader from '../components/SubHeader';
import UseHasuraFree from "../components/UseHasuraFree";
import CopyWriter from "../components/CopyWriter";
// import FloatingSubscribeNewsletter from '../components/FloatingSubscribeNewsletter';
import '../components/styles.css';
import config from '../../config';
import gitHub from '../components/images/github.svg';
import footerIllustration from '../components/images/footer-img.png';

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
  @media(max-width: 767px) {
    justify-content: center;
    padding-top: 24px;
  }
`;

const HelpfulGithubWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
  .helpfulWrapper {
    display: flex;
    align-items: center;
    .desc {
      padding-right: 8px;
      padding-bottom: 0;
    }
    .iconWrapper {
      display: flex;
      align-items: center;
      .satisfied, .dissatisfied {
        margin: 0 8px;
        display: flex;
        cursor: pointer;
        &:hover {
          svg {
            fill: #0079BD;
          }
        }
        svg {
          fill: #74818A;
        }
      }
    }
  }
  @media(max-width: 767px) {
    display: block;
    .helpfulWrapper {
      display: block;
      .desc {
        padding-right: 0;
        text-align: center;
      }
      .iconWrapper {
        justify-content: center;
        padding: 16px 0;
      }
    }
  }
`;

const FooterImag = styled('div')`
  padding: 50px 0;
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
        <HelpfulGithubWrapper>
          <div className="helpfulWrapper">
            <div className="desc">Did you find this page helpful?</div>
            <div className="iconWrapper">
              <div className="satisfied">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"/>
                  <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"/>
                  <path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"/>
                  <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"/>
                  <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5Z"/>
                </svg>
              </div>
              <div className="dissatisfied">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"/>
                  <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"/>
                  <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 14C9.67 14 7.68 15.45 6.88 17.5H8.55C9.24 16.31 10.52 15.5 12 15.5C13.48 15.5 14.75 16.31 15.45 17.5H17.12C16.32 15.45 14.33 14 12 14Z"/>
                </svg>
              </div>
            </div>
          </div>
          <Edit className="mobileView">
            {docsLocation && (
              <Link className="gitBtn" to={`${docsLocation}/${mdx.parent.relativePath}`}>
                <img src={gitHub} alt='Github logo' /> Edit on GitHub<div className="arrow">{"→"}</div>
              </Link>
            )}
          </Edit>
        </HelpfulGithubWrapper>
        <div className="addPaddTopBottom">
          <NextPrevious mdx={mdx} nav={nav} />
        </div>
        <UseHasuraFree />
        <FooterImag>
          <img src="https://graphql-engine-cdn.hasura.io/learn-hasura/assets/footer-img.png" alt='footer illustration' />
        </FooterImag>
        <CopyWriter />
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
