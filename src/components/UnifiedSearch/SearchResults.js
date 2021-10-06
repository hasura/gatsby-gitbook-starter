import React, { Fragment } from "react";
import styled from "styled-components";
import { connectStateResults, Highlight, Hits, Index, Snippet } from "react-instantsearch-dom";
import { INDEX_TYPES } from "./constants";
import { mq } from "../../globals/utils";
import { COLORS, TYPOGRAPHY } from "../../globals/designSystem";
import SearchFooter from "./SearchFooter";

const StyledSearchResults = styled.div`
  clear: both;
  z-index: 2;
  .indexTitle {
    font-weight: 600;
    text-align: left;
    padding: 0 0 12px 1rem;
  }
  .Hits,
  .ais-Hits {
    .ais-Hits-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 40px;
      .ais-Hits-item {
        list-style-type: none;
        color: ${COLORS.sky_100} !important;
        margin: 0;
        padding: 1rem 1rem 0.2rem;
        border-bottom: 1px solid transparent;
        text-align: left;
        font-size: 1rem;
        &:hover {
          border-bottom-color: ${COLORS.grey_26};
        }
        .hit-type {
          text-transform: uppercase;
          color: ${COLORS.sky_90};
          font-size: 12px;
          line-height: 150%;
          font-weight: 600;
        }
        .hit-slug {
          margin: 1rem 0 0.2rem;
          ${TYPOGRAPHY.navigation};
          color: ${COLORS.grey_70};
          padding-top: 1rem;
          word-break: break-word;
          align-self: flex-end;
        }
        a {
          display: grid;
          height: 100%;
          .hit-item-main {
            align-self: flex-start;
          }
        }
        .ais-Snippet {
          word-break: break-word;
          ${TYPOGRAPHY.description_2};
          color: ${COLORS.sky_100};
          font-weight: normal;
        }
        mark {
          // color: #E65678;
          background-color: #e4e8ed;
        }
      }
    }
  }
  .ais-PoweredBy {
    display: flex;
    text-align: left;
    .ais-PoweredBy-text {
      padding-right: 6px;
    }
  }
  ${mq.below.lg} {
    .ais-Hits,
    .Hits {
      .ais-Hits-list {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  ${mq.below.md} {
    max-width: none;
    width: 100%;
    .ais-Hits,
    .Hits {
      .ais-Hits-list {
        grid-template-columns: 1fr;
      }
    }
  }
  @media (max-width: 441px) {
    top: 155px;
  }
`;

const HitTitle = styled.h4`
  color: ${COLORS.sky_100} !important;
  padding: 1rem 0;
  font-weight: 600 !important;
  ${TYPOGRAPHY.description_1};
`;

const HitSlug = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HitsHeader = ({ searchResults, indexTitle, showSeparator }) => {
  const hitCount = searchResults && searchResults.nbHits;
  return hitCount > 0 ? (
    <Fragment>
      {showSeparator && <hr />}
      {/* <div className="HitCount">
        {hitCount} result{hitCount !== 1 ? `s` : ``}
      </div> */}
      <h4 className="indexTitle">{indexTitle}</h4>
    </Fragment>
  ) : null;
};

const CustomHitsHeader = connectStateResults(HitsHeader);

const PageHit = ({ hit, indexType }) => (
  <a href={hit.url}>
    <div className="hit-item-main">
      <span className="hit-type">{indexType}</span>
      {indexType === INDEX_TYPES.docs ? (
        <Fragment>
          {!!hit.hierarchy && (
            <HitTitle>{`${Object.values(hit.hierarchy).filter(h => !!h).reverse()[0]}`}</HitTitle>
          )}
          <Snippet attribute="content" hit={hit} tagName="mark" />
        </Fragment>
      ) : (
        <Fragment>
          <HitTitle>
            <Highlight attribute="title" hit={hit} tagName="mark" />
          </HitTitle>
          <Snippet attribute="excerpt" hit={hit} tagName="mark" />
        </Fragment>
      )}
    </div>
    {hit.url ? (
      <div className="hit-slug">
        <HitSlug>{hit.url.replace(`https://hasura.io/`, "/")}</HitSlug>
      </div>
    ) : null}
  </a>
);

const HitsByIndexType = ({ indexType }) => {
  if (INDEX_TYPES[indexType] === undefined) return null;

  return (
    <Hits
      className="Hits"
      hitComponent={hitProps => <PageHit {...hitProps} indexType={indexType} />}
    />
  );
};

const HitsInIndex = ({ index, show, idx }) => (
  <Index indexName={index.name}>
    {show && (
      <Fragment>
        <CustomHitsHeader
          indexTitle={index.title}
          showSeparator={idx !== 0}
        />
        <HitsByIndexType indexType={index.type} />
      </Fragment>
    )}
  </Index>
);

const SearchResult = ({ indices, className, id, wrapperRef, activeIndexTypes }) => (
  <StyledSearchResults id={id} className={className} ref={wrapperRef}>
    {indices.map((index, idx) => (
      <HitsInIndex index={index} key={index.name} show={activeIndexTypes[index.type]} idx={idx} />
    ))}
    <SearchFooter />
  </StyledSearchResults>
);

export default SearchResult;
