import React from "react";
import GitHubButton from "react-github-btn";

export const GithubWidget = () => (
  <GitHubButton
    href="https://github.com/hasura/graphql-engine"
    data-size="large"
    data-show-count="true"
    aria-label="Star @hasura on GitHub"
  >
    Star
  </GitHubButton>
);
