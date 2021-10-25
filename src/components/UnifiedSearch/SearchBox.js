import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { connectSearchBox } from 'react-instantsearch-dom';
import SearchIcon from '../../globals/icons/Search';
import CloseIcon from '../../globals/icons/Close';
import { mq } from '../../globals/utils';
import { COLORS, TYPOGRAPHY } from '../../globals/designSystem';
import Loader from '../../globals/elements/Loader';

const searchSuggestions = [
  'GraphQL',
  'Actions',
  'Authentication',
  'React',
  'Remote Joins',
  'Postgres',
];

const StyledSeachBoxWrapper = styled.div`
  position: sticky;
  top: -4rem;
  z-index: 10;
  padding-top: 45px;
  padding-bottom: 30px;
  background-color: ${COLORS.grey_0};
  form {
    flex: 1;
  }
  .searchSuggestionsWrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 1rem;
    .suggestions-label {
      font-size: 13px;
      color: ${COLORS.grey_70};
      margin-right: 1rem;
      font-weight: 600;
    }
    .hasura-suggestion-btn {
      padding: 5px 12px;
      color: ${COLORS.grey_90};
      background-color: ${COLORS.grey_12};
      border: 1px solid ${COLORS.grey_12};
      border-radius: 4px;
      margin: 0.5rem;
      ${TYPOGRAPHY.navigation};
      &:hover {
        background-color: ${COLORS.grey_20};
        color: ${COLORS.grey_100};
      }
      &.active {
        background-color: ${COLORS.blue_10};
        border-color: ${COLORS.blue_30};
      }
    }
  }
  .searchInputWrapper {
    position: relative;
    display: flex;
    align-items: center;
    input {
      padding: 1rem 2.25rem;
      font-family: 'IBM Plex Sans';
      font-size: 18px;
      line-height: 160%;
      width: 100%;
      border: 1px solid ${COLORS.grey_26};
      border-radius: 8px;
      text-indent: 4px;
      color: ${COLORS.grey_98};
      height: 40px;
      background-color: ${COLORS.white};
      &:focus {
        border-color: ${COLORS.sky};
      }
    }
    .searchBoxLeftIcon {
      position: absolute;
      left: 1rem;
      display: flex;
      akign-items: center;
    }
    .inputCloseIcon {
      display: flex;
      position: absolute;
      right: 1rem;
      border-radius: 4px;
      transition: background 0.3s linear;
      padding: 0.1rem;
      background: ${COLORS.grey_12};
      &:hover {
        background: ${COLORS.grey_20};
      }
      svg {
        padding: 0.2rem;
      }
    }
  }
  ::placeholder {
    color: #b1bcc7;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #b1bcc7;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #b1bcc7;
  }
  img {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  ${mq.below.lg} {
    margin: 0 auto;
    padding-bottom: 20px;
    top: -2.5rem;
  }
  ${mq.below.md} {
    max-width: none;
    width: 100%;
    form {
      margin-left: 8px;
    }
    svg {
      width: 20px;
      height: 20px;
    }
    .searchInputWrapper {
      .searchBoxLeftIcon {
        left: 1.5rem;
      }
    }
  }
  ${mq.below.sm} {
    .searchSuggestionsWrapper {
      display: none;
    }
  }
`;

const DebouncedSearchBox = ({
  refine,
  currentRefinement,
  className,
  delay = 500,
  isSearchStalled,
}) => {
  const [value, setValue] = useState(currentRefinement);
  const timerId = useRef();

  const trySuggestion = (inputValue) => {
    refine(inputValue);
    setValue(inputValue);
  };

  const resetInput = () => {
    refine('');
    setValue('');
  };

  const onChangeDebounced = (event) => {
    const value = event.target.value;

    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => refine(value), delay);

    setValue(value);
  };
  return (
    <StyledSeachBoxWrapper>
      <div className="searchInputWrapper">
        <div className="searchBoxLeftIcon">
          {isSearchStalled ? (
            <Loader />
          ) : (
            <SearchIcon className="searchIcon" variant="grey100" size="sm" />
          )}
        </div>
        <form className={className} onSubmit={(e) => e.preventDefault()}>
          <input
            id="search-input"
            className="SearchInput"
            type="text"
            placeholder="Search for tutorials, articles or docs"
            aria-label="Search"
            onChange={onChangeDebounced}
            value={value}
          />
        </form>
        <div onClick={resetInput} className="inputCloseIcon">
          <CloseIcon className="cursorPointer" variant="grey100" size="md" />
        </div>
      </div>
      <div className="searchSuggestionsWrapper">
        <span className="suggestions-label">POPULAR</span>
        {searchSuggestions.map((suggestion) => (
          <button
            key={suggestion}
            className={`hasura-suggestion-btn cursorPointer ${
              currentRefinement === suggestion ? 'active' : ''
            }`}
            onClick={() => trySuggestion(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </StyledSeachBoxWrapper>
  );
};

export default connectSearchBox(DebouncedSearchBox);
