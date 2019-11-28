import { system } from "styled-system";

const Container = system(
  {
    is: "div",
    px: 3,
    mx: "auto",
    maxWidth: 1024
  },
  "maxWidth"
);
Container.displayName = "Container";

export default Container;
