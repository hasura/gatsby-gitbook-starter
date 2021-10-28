import React from "react";
import PropTypes from "prop-types";
import { StyledSVG } from "../styled";
const Search = ({ variant, size, className }) => (
  <StyledSVG
    variant={variant}
    size={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L18.2929 19.7843C18.6835 20.1742 19.3162 20.1738 19.7064 19.7836L19.7836 19.7064C20.1738 19.3162 20.1742 18.6835 19.7843 18.2929L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" />
  </StyledSVG>
);
Search.propTypes = {
  variant: PropTypes.oneOf(["white", "sky", "sky80", "green", "dark", "grey", "grey100"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  className: PropTypes.string,
};

Search.defaultProps = {
  variant: "white",
  size: "md",
  className: "",
};

export default Search;
