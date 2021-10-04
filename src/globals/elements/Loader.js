import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLORS } from "../designSystem";

const StyledWrapper = styled.div`
  background: transparent;
  .sm {
    width: 18px;
    height: 18px;
  }

  .loader {
    border: 3px solid ${COLORS.grey_30};
    border-top-color: ${COLORS.sky_70};
    border-radius: 50%;
    animation: spin 1s linear infinite;
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

const Loader = ({ size }) => (
  <StyledWrapper>
    <div className={`loader ${size}`} />
  </StyledWrapper>
);

Loader.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

Loader.defaultProps = {
  size: "sm",
};

export default Loader;
