const hasClass = (elt, name) => elt.classList.contains(name);
// const hasAnyClass = (elt, ...names) => arrIncludesAny(Array.from(elt.classList), names);
// @todo
// const hasEveryClass = (elt, ...names) => arrIncludesAll(Array.from(elt.classList), names);

const addClass = (elt, ...args) => {
	for (const arg of args) if (!elt.classList.contains(arg)) elt.classList.add(arg);
}
const removeClass = (elt, ...args) => {
	for (const arg of args) elt.classList.remove(arg);
}
const toggleClass = (elt, arg) => elt.classList.toggle(arg);
