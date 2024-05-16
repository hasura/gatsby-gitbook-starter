// media query helpers, mixins etc.,
import { BREAKPOINTS } from './designSystem';

const above = Object.keys(BREAKPOINTS).reduce((acc, bp) => {
  acc[bp] = `@media (min-width: ${BREAKPOINTS[bp]}px)`;
  return acc;
}, {});

// Usage mq.above.sm { ...styles }

const below = Object.keys(BREAKPOINTS).reduce((acc, bp) => {
  acc[bp] = `@media (max-width: ${BREAKPOINTS[bp]}px)`;
  return acc;
}, {});

// Usage mq.below.md { ...styles }

const between = (lowerBp, higherBp) =>
  `@media (min-width: ${BREAKPOINTS[lowerBp]}px) and (max-width: ${BREAKPOINTS[higherBp]}px)`;

// Usage mq.between('sm', 'md') { ...styles }

export const mq = { above, below, between };

// Helper to check array data type
export function checkIsArray(arrayInput) {
  if (arrayInput) {
    if (arrayInput?.constructor.name === 'Array' && arrayInput.length > 0) {
      return true;
    }
  }

  return false;
}
