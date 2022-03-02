import { fn } from '../func/functions.js';

export const dom = {
	get,
	create,
	append,
	hasClass,
	addClass,
	removeClass,
	toggleClass,
	addStyles,
	removeStyles,
	setInlineStyle,
	removeInlineStyle,
	addAttributesGrabbing,
	getBounding,
	setBounding,
	getComputed,
	getString,
}


function hasClass(elt, name) {
	return elt.classList.contains(name);
}
function addClass() {
	_call(_add, ...arguments);
}
function removeClass() {
	_call(_remove, ...arguments);
}
function toggleClass() {
	_call(_toggle, ...arguments);
}
function _call(func, elt, ...args) {
	for (const arg of args) func(elt, arg);
}
function _add(elt, name) {
	if (!hasClass(elt, name)) elt.classList.add(name);
}
function _remove(elt, name) {
	if (hasClass(elt, name)) elt.classList.remove(name);
}
function _toggle(elt, name) {
	(hasClass(elt, name)) ? _remove(elt, name) : _add(elt, name);
}

function addStyles(elt, styles) {
	console.log(styles)
	Object.assign(elt.style, styles);
}
function removeStyles(elt, ...styles) {
	for (const rule of styles) elt.style.removeProperty(rule);
}
function setInlineStyle(elt, key, value) {
	elt.style.setProperty(key, value);
}
function removeInlineStyle(elt, key) {
	elt.style.removeProperty(key);
}
function addAttributesGrabbing(elt, action = undefined) {
	if (action !== undefined) elt.setAttribute('data-action', action);
	elt.setAttribute('data-mouseover', 'grab');
	elt.setAttribute('data-mousedown', 'grabbing');
}

// *** MISCELLANEOUS *** START
function getComputed(elt, key) {
	return parseFloat(getComputedStyle(elt)[key].replace('px', ''));
}
function getBounding(elt, ...keys) {
	const { width, height, x: left, y: top } = elt.getBoundingClientRect();
	const out = {
		width,
		height,
		left,
		top
	};
	if (keys.length > 0) {
		for (const key of Object.keys(out)) if (!keys.includes(key)) delete out[key];
		return out;
	}
	return out;
}

function setBounding(elt, values = {}, unit = 'px') {
	for (const key of Object.keys(values)) elt.style[key] = values[key] + unit;
}

// function getOffset(elt) {
// 	const rect = elt.getBoundingClientRect(),
// 				scrollLft = window.pageXOffset || document.documentElement.scrollLeft,
// 				scrollTop = window.pageYOffset || document.documentElement.scrollTop;

// 	return {
// 		top: parseFloat((rect.top + scrollTop).toFixed(2)),
// 		left: parseFloat((rect.left + scrollLft).toFixed(2)),
// 		right: parseFloat((rect.left + scrollLft + rect.width).toFixed(2)),
// 		width: parseFloat((rect.width).toFixed(2)) };
// }
function getString(elt) {
	return `${elt.localName}${(elt.id !== '') ? '#' + elt.id : ''}${(elt.classList.length > 0) ? '.' + [...elt.classList].join('.') : ''} ${(elt.hasAttribute('data-action')) ? '\naction: ' + elt.getAttribute('data-action') : ''}`;
}