import React from "react";
import { StyledSVG } from "../styled";
import { sizes } from "../options";

const ArrowRight = ({ variant, size, className }) => (
  <StyledSVG
    variant={variant}
    className={className}
    size={size}
    viewBox={`0 0 ${sizes[size].width.split("p")[0]} ${sizes[size].height.split("p")[0]}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M7.63611 11.9698C7.34322 12.2627 7.34322 12.7375 7.63611 13.0304C7.92901 13.3233 8.40388 13.3233 8.69677 13.0304L13.1968 8.53038C13.4897 8.23748 13.4897 7.76261 13.1968 7.46971L8.69677 2.96967C8.40388 2.67678 7.92901 2.67678 7.63611 2.96967C7.34322 3.26256 7.34322 3.73744 7.63611 4.03033L10.8558 7.25L2.99982 7.25C2.5856 7.25 2.24982 7.58579 2.24982 8C2.24982 8.41422 2.5856 8.75 2.99982 8.75L10.8559 8.75L7.63611 11.9698Z" />
  </StyledSVG>
);

export default ArrowRight;
