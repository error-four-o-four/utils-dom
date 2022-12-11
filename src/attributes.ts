/**
 *
 * @param {HTMLElement} elt
 * @param {string} arg
 * @returns
 */
export const hasClass = (elt: HTMLElement, arg: string): boolean =>
  elt.classList.contains(arg);

/**@todo */

// has Any, has Every
// export const hasClass = (elt, name) => elt.classList.contains(name);
// export const hasAnyClass = (elt, ...names) => arrIncludesAny(Array.from(elt.classList), names);

/////////////////////////////////////////////////////////////////////////////////////

const call = (fn: Function, elt: HTMLElement, ...args: string[]): void => {
  for (const arg of args) fn(elt, arg);
};

const add = (elt: HTMLElement, arg: string): void => {
  if (!hasClass(elt, arg)) elt.classList.add(arg);
};

/**
 *
 * @param elt
 * @param args
 */
export const addClass = (elt: HTMLElement, ...args: string[]): void => {
  for (const arg of args) call(add, elt, arg);
};

const rem = (elt: HTMLElement, arg: string): void => {
  if (hasClass(elt, arg)) elt.classList.remove(arg);
};

/**
 *
 * @param elt
 * @param args
 */
export const removeClass = (elt: HTMLElement, ...args: string[]): void => {
  for (const arg of args) call(rem, elt, arg);
};

/**
 *
 * @param elt
 * @param args
 */
export const toggleClass = (elt: HTMLElement, ...args: string[]): void => {
  for (const arg of args) elt.classList.toggle(arg);
};