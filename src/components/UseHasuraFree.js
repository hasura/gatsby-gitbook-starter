import React from "react";
import styled from '@emotion/styled';

const StyledUseHasuraFreeWrapper = styled('div')`
  padding: 30px;
  background-color: #F8FCFF;
  border: 1px solid #D5DEE6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .desc {
    padding-bottom: 0;
  }
  .buttonWrapper {
    padding-left: 24px;
  }
  @media (max-width: 767px) {
    padding: 16px;
    display: block;
    text-align: center;
    .buttonWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 16px;
      padding-left: 0;
    }
  }
  @media (max-width: 330px) {
    padding: 16px 7px;
    .buttonWrapper {
      .blueBtn {
        padding: 10px 10px;
      }
    }
  }
`;

const UseHasuraFree = () => {
  return (
    <StyledUseHasuraFreeWrapper>
      <div className="desc font_600">Use Hasura for free</div>
      <div className="buttonWrapper">
        <a href="https://cloud.hasura.io/signup?pg=learn-course&plcmt=body&cta=try-graphql-with-hasura&tech=default">
          <button className="blueBtn">Try GraphQL with Hasura</button>
        </a>
      </div>
    </StyledUseHasuraFreeWrapper>
  );
};

export default UseHasuraFree;
