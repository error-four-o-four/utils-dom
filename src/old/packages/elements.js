import { splitAt } from '../../fn/packages/arrays.js';
import { arrIncludesAny } from '../../fn/packages/arrays.js';
import { arrIncludesAll } from '../../fn/packages/arrays.js';



export const hasClass = (elt, name) => elt.classList.contains(name);
export const hasAnyClass = (elt, ...names) => arrIncludesAny(Array.from(elt.classList), names);
// @todo
// export const hasEveryClass = (elt, ...names) => arrIncludesAll(Array.from(elt.classList), names);

export const addClass = (elt, ...args) => {
	for (const arg of args) if (!elt.classList.contains(arg)) elt.classList.add(arg);
}
export const removeClass = (elt, ...args) => {
	for (const arg of args) elt.classList.remove(arg);
}
export const toggleClass = (elt, arg) => elt.classList.toggle(arg);

