import React from "react";
import PropTypes from "prop-types";
import { StyledSVG } from "../styled";

const Close = ({ variant, size, className }) => (
  <StyledSVG
    variant={variant}
    size={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.2987 5.70973C17.9087 5.31973 17.2787 5.31973 16.8887 5.70973L11.9988 10.5897L7.10875 5.69973C6.71875 5.30973 6.08875 5.30973 5.69875 5.69973C5.30875 6.08973 5.30875 6.71973 5.69875 7.10973L10.5888 11.9997L5.69875 16.8897C5.30875 17.2797 5.30875 17.9097 5.69875 18.2997C6.08875 18.6897 6.71875 18.6897 7.10875 18.2997L11.9988 13.4097L16.8887 18.2997C17.2787 18.6897 17.9087 18.6897 18.2987 18.2997C18.6887 17.9097 18.6887 17.2797 18.2987 16.8897L13.4087 11.9997L18.2987 7.10973C18.6787 6.72973 18.6787 6.08973 18.2987 5.70973Z" />
  </StyledSVG>
);

Close.propTypes = {
  variant: PropTypes.oneOf(["white", "sky", "sky80", "green", "dark", "grey100"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  className: PropTypes.string,
};

Close.defaultProps = {
  variant: "white",
  size: "md",
  className: "",
};

export default Close;
