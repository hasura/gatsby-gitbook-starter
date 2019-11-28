import { system } from "styled-system";
import styled from "styled-components";

const Pre = styled("pre")(
  system(
  {
    is: "pre",
    fontSize: 1,
    // fontFamily: "mono",
    m: 0
  },
  {
    overflow: "auto",
  },
  "fontFamily",
  "space",
  "color"
  ));
Pre.displayName = "Pre";

export default Pre;
