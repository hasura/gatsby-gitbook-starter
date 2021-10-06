import styled from "styled-components";
import { variants, sizes, defaults } from "./options";

export const StyledSVG = styled.svg`
  fill: ${({ variant }) => variants[variant]?.fill || defaults.variant.fill};
  width: ${({ size }) => sizes[size]?.width || defaults.size.width};
  height: ${({ size }) => sizes[size]?.height || defaults.size.height};
`;
