// import { Link } from "gatsby"
import React, { useState } from 'react';

const IconHover = ({ baseImgSrc, hoverImgSrc, altText }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const imageSrc = isMouseOver ? hoverImgSrc : baseImgSrc;

  return (
    <img
      onFocus={() => setIsMouseOver(!isMouseOver)}
      onBlur={() => setIsMouseOver(!isMouseOver)}
      onMouseOver={() => setIsMouseOver(!isMouseOver)}
      onMouseOut={() => setIsMouseOver(!isMouseOver)}
      src={imageSrc}
      alt={altText}
    />
  );
};

export default IconHover;
