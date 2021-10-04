import React, { useEffect } from "react";
import styled from "styled-components";
import SearchWrapper from "./SearchWrapper";
import CloseIcon from "../../globals/icons/Close";
import { mq } from "../../globals/utils";
import { SEARCH_INDICES } from "./constants";

const StyledSearchOverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #f8fcff;
  display: none;
  cursor: default;
  &.open {
    display: block;
  }
  &.zIndexSearch {
    z-index: 100001;
  }
  .closeIcon {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 99;
    ${mq.below.lg} {
      top: 1rem;
      right: 1rem;
    }
  }
  .globalSearchWrapper {
    margin: auto;
    width: 100%;
    height: 100%;
    outline: none;
    overflow: auto;
    padding: 4rem 0;
  }
  hr {
    margin: 2.4rem 0;
    height: 1px;
    width: 100%;
    border: 0;
    border-top: 1px solid #e3e9ed;
  }
  ${mq.below.lg} {
    .globalSearchWrapper {
      padding: 2.5rem 0;
    }
  }
`;

const SearchOverlay = ({ showSearch, onCloseSearch, defaultIndex }) => {
  const closeSearchOnEsc = e => (e.key === "Escape" ? onCloseSearch() : null);

  useEffect(() => {
    document.addEventListener("keydown", closeSearchOnEsc);
    return () => {
      document.removeEventListener("keydown", closeSearchOnEsc);
    };
  }, []);

  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSearch]);

  return (
    <StyledSearchOverlayWrapper className={showSearch ? "open zIndexSearch" : ""}>
      <div onClick={onCloseSearch} className="closeIcon cursorPointer">
        <CloseIcon variant="grey100" size="md" />
      </div>
      <div className="globalSearchWrapper">
        <div className="containerWrapper">
          <SearchWrapper indices={SEARCH_INDICES} onCloseSearch={onCloseSearch} defaultIndex={defaultIndex} />
        </div>
      </div>
    </StyledSearchOverlayWrapper>
  );
};

export default SearchOverlay;
