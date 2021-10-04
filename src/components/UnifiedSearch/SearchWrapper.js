import algoliasearch from "algoliasearch/lite";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { InstantSearch, connectStateResults, Index, Configure } from "react-instantsearch-dom";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import { INDEX_TYPES } from "./constants";
import { COLORS } from "../../globals/designSystem";
import { mq } from "../../globals/utils";
import SearchFooter from "./SearchFooter";
import { Fragment } from "react";
import config from "../../../config";

const StyledSearchHelperText = styled.div`
  padding-top: 48px;
  color: ${COLORS.sky_100};
`;

const StyledFilterWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 12px;
  padding: 2.5rem 0;
  ${mq.below.md} {
    grid-template-columns: 1fr;
    padding: 24px 0;
    padding-top: 12px;
  }
`;
const StyledFilter = styled.div`
  position: sticky;
  top: 130px;
  align-self: flex-start;
  padding: 0 1rem;
  h5 {
    font-size: 13px;
    font-weight: 600;
    margin: 0;
    color: ${COLORS.grey_70} !important;
    text-transform: uppercase;
  }
  ul {
    margin-bottom: 0;
    li {
      display: flex !important;
      align-items: center;
      margin-right: 0 !important;
      padding: 1rem 0 !important;
      input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        & + label {
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          color: ${COLORS.grey_98};
          font-size: 14px !important;
          line-height: 160% !important;
          font-weight: normal;
          margin-bottom: 0;
          z-index: 1;
          text-transform: capitalize;
          &:first-child {
            margin-top: 0;
          }
        }
        & + label:before {
          content: "";
          display: inline-block;
          vertical-align: text-top;
          width: 20px;
          height: 20px;
          background: transparent;
          border-radius: 2px;
          border: 1px solid ${COLORS.grey_80};
          margin-right: 0.8rem;
        }
        &:disabled + label {
          color: #b8b8b8;
          cursor: auto;
        }
        &:disabled + label:before {
          box-shadow: none;
          background: #ddd;
        }
        &:hover + label:before,
        &:checked + label:before,
        &:checked + label:after {
          border: 1px solid ${COLORS.blue_80};
        }
        /* Checkmark. Could be replaced with an image */
        &:checked + label:after {
          content: "";
          position: absolute;
          left: 7px;
          top: 5px;
          border-width: 0 2px 2px 0;
          width: 6px;
          height: 10px;
          border-radius: 1px;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }
  }
  ${mq.below.lg} {
    top: 150px;
  }
  ${mq.below.md} {
    position: static;
    ul {
      display: flex;
      li {
        padding-right: 8px !important;
        margin-right: 1rem !important;
        label {
          line-height: 100%;
        }
      }
    }
  }
`;

const algoliaClient = algoliasearch(
  config.header.search.algoliaAppId,
  config.header.search.algoliaSearchKey
);

// Skip empty query on page load
// Ref: https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-requests/react/
const searchClient = {
  ...algoliaClient,
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          processingTimeMS: 0,
        })),
      });
    }

    return algoliaClient.search(requests);
  },
};

const AllResults = ({ allSearchResults, children, indices, searchState, searching }) => {
  if (!searchState?.query) return null;

  const hasResults =
    allSearchResults && Object.values(allSearchResults).some(results => results.nbHits > 0);
  return !hasResults ? (
    <div>
      <StyledSearchHelperText>
        {searching ? (
          <span>
            Searching for "<em>{searchState?.query}</em>"
          </span>
        ) : (
          <span>
            No results for "<em>{searchState?.query}</em>"
          </span>
        )}
      </StyledSearchHelperText>
      {indices.map(index => (
        <Index indexName={index.name} key={index.name} />
      ))}
      <SearchFooter />
    </div>
  ) : (
    children
  );
};

const CustomAllResults = connectStateResults(AllResults);

const IndexTypeFilter = ({ activeIndexTypes, setActiveIndexTypes }) => {
  const handleOnChange =
    indexType =>
    ({ target }) => {
      setActiveIndexTypes(prevState => ({
        ...prevState,
        [indexType]: target.checked,
      }));
    };

  return (
    <StyledFilter>
      <h5>Filter</h5>
      <ul>
        {Object.values(INDEX_TYPES).map(index => (
          <li key={index}>
            <input
              type="checkbox"
              id={"algolia_index_type_" + index}
              name={"algolia_index_type_" + index}
              value={index}
              checked={activeIndexTypes[index]}
              onChange={handleOnChange(index)}
            />
            <label htmlFor={"algolia_index_type_" + index}>{index}</label>
          </li>
        ))}
      </ul>
    </StyledFilter>
  );
};

export default function SearchWrapper({ indices, defaultIndex }) {
  const defaultIndexTypesState = Object.values(INDEX_TYPES).reduce((a, c) => {
    a[c] = true;
    return a;
  }, {});
  const wrapperRef = useRef(null);
  const [activeIndexTypes, setActiveIndexTypes] = useState(defaultIndexTypesState);
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={defaultIndex?.name || indices[0].name}
      onSearchStateChange={() => setActiveIndexTypes(defaultIndexTypesState)}
    >
      <SearchBox />
      <CustomAllResults indices={indices}>
        <StyledFilterWrapper>
          <IndexTypeFilter
            activeIndexTypes={activeIndexTypes}
            setActiveIndexTypes={setActiveIndexTypes}
          />
          <SearchResults
            id="search-results"
            indices={indices}
            wrapperRef={wrapperRef}
            activeIndexTypes={activeIndexTypes}
            className="search-results"
          />
        </StyledFilterWrapper>
      </CustomAllResults>
      <Configure hitsPerPage={5} />
    </InstantSearch>
  );
}
