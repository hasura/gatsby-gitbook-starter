import { system } from "styled-system";
import styled from "styled-components";

const Heading = styled('h1')(
  system(
  {
    is: 'h1',
    fontSize: 5,
    fontWeight: "700",
    lineHeight: 1.5,
    mt: 4,
    mb: 3
  },
  "fontFamily",
  "color",
  "textAlign"
  ));
Heading.displayName = "Heading";

export default Heading;


