const addStyles = (elt, styles = {}) => {
	Object.assign(elt.style, styles);
}

const removeStyles = (elt, ...styles) => {
	for (const rule of styles) elt.style.removeProperty(rule);
}

const inlineStyle = (elt, key, value) => {
	elt.style.setProperty(key, value);
}

// *** MISCELLANEOUS *** START
function getBounding(elt, key) {
  return parseFloat(getComputedStyle(elt)[key].replace('px', ''));
}

function getOffset(elt) {

  // return Object.entries(elt.getBoundingClientRect()).map((key, value) => { return { key} })
  // const { top, left, right } = elt.getBoundingClientRect();

  // return {
  // 	top: parseFixedFloat(top),
  // 	left: parseFixedFloat(left),
  // 	right: parseFixedFloat(right)
  // }
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
