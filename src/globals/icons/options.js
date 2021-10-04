import { COLORS } from "../designSystem";

const variants = {
  white: {
    fill: COLORS.white,
  },
  green: {
    fill: COLORS.green,
  },
  sky: {
    fill: COLORS.sky_10,
  },
  sky80: {
    fill: COLORS.sky_80,
  },
  dark: {
    fill: COLORS.grey_10,
  },
  grey100: {
    fill: COLORS.grey_100,
  },
  blue90: {
    fill: COLORS.blue_90,
  },
};

const sizes = {
  sm: {
    width: "18px",
    height: "18px",
  },
  md: {
    width: "24px",
    height: "24px",
  },
  lg: {
    width: "36px",
    height: "36px",
  },
  xl: {
    width: "40px",
    height: "40px",
  },
};

const defaults = {
  variant: variants.white,
  size: sizes.md,
};

export { variants, sizes, defaults };
