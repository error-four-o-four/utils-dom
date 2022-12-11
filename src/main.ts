import * as reading from "./reading";
import * as creating from "./creating";
import * as attributes from "./attributes";

// DOM
export const dom = {
  ...reading,
  ...creating,
  ...attributes,
};

// USER
export * from "./environment";

export declare const isMobileDevice: () => boolean;
export declare const supportsTouchEvents: () => boolean;
export declare const prefersDarkColorScheme: () => boolean;
export declare const prefersLightColorScheme: () => boolean;
export declare const prefersReducedMotion: () => boolean;