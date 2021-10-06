import React, { Fragment } from "react";
import styled from "styled-components";
import { PoweredBy } from "react-instantsearch-dom";
import { TYPOGRAPHY } from "../../globals/designSystem";

const StyledSearchFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4rem;
  ${TYPOGRAPHY.description_1};
  p {
    margin: 0 0 1rem;
  }
`;

const SearchFooter = () => (
  <Fragment>
    <hr />
    <StyledSearchFooter>
      <div className="community-links-wrapper">
        <p>Unable to find what you're looking for?</p>
        <p>
          Reach out to our{" "}
          <a href="https://discord.com/invite/hasura" target="_blank" rel="noopener noreferrer">
            Discord Community
          </a>{" "}
          or start a{" "}
          <a
            href="https://github.com/hasura/graphql-engine/discussions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discussion on GitHub
          </a>
        </p>
      </div>
      <PoweredBy />
    </StyledSearchFooter>
  </Fragment>
);

export default SearchFooter;
