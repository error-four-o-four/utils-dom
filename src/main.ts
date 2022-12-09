// USER
import {
  isMobileDevice,
  supportsTouchEvents,
  prefersDarkColorScheme,
  prefersLightColorScheme,
  prefersReducedMotion,
} from "./environment";

import * as reading from "./reading";
import * as creating from "./creating";
import * as attributes from "./attributes";

export {
  isMobileDevice,
  supportsTouchEvents,
  prefersDarkColorScheme,
  prefersLightColorScheme,
  prefersReducedMotion,
};

export default {
  isMobileDevice,
  supportsTouchEvents,
  prefersDarkColorScheme,
  prefersLightColorScheme,
  prefersReducedMotion,
  ...reading,
  ...creating,
  ...attributes,
};
