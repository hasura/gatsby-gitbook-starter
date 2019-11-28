import { system } from "styled-system";
import styled from "styled-components";

const Text = styled("p")(
  system(
  {
    m: 0
  },
  "space",
  "color",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "textAlign",
  "lineHeight"
  ));
Text.displayName = "Text";

export default Text;
