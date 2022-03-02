import * as environment from './packages/environment.js';
import * as elements from './packages/elements.js';
import * as styles from './packages/styles.js';

export const dom = {};

Object.assign(dom, environment);
Object.assign(dom, styles);
Object.assign(dom, elements);