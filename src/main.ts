import * as reading from "./reading";
import * as creating from "./creating";
import * as attributes from "./attributes";

// USER
export * from "./environment";

// DOM
export const dom = {
  ...reading,
  ...creating,
  ...attributes,
};
