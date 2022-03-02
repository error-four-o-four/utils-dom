export const injectStyleSheet = (css) => {
	let el = document.createElement('style');
	// el.type = 'text/css';
	el.innerText = css;
	document.head.appendChild(el);
	return el;
};

export const addStyles = (elt, styles = {}) => {
	Object.assign(elt.style, styles);
}

export const removeStyles = (elt, ...styles) => {
	for (const rule of styles) elt.style.removeProperty(rule);
}

export const inlineStyle = (elt, key, value) => {
	elt.style.setProperty(key, value);
}


export const animateTo = (elt, keyframes, options) => {
  const animation = elt.animate(
    keyframes, {
      ...options,
      fill: 'forwards'
    },
  );
  animation.addEventListener('finish', () => {
    animation.commitStyles();
    animation.cancel();
  })
  return animation;
}

export const fadeIn = (elt, duration = 1000, options = {}) => {
  return animateTo(elt, {
    opacity: 1
  }, Object.assign(options, {
    duration
  }))
}

export const fadeOut = (elt, duration = 1000, options = {}) => {
  return animateTo(elt, {
    opacity: 0
  }, Object.assign(options, {
    duration
  }))
}

// function addAttributesGrabbing(elt, action = undefined) {
//   if (action !== undefined) elt.setAttribute('data-action', action);
//   elt.setAttribute('data-mouseover', 'grab');
//   elt.setAttribute('data-mousedown', 'grabbing');
// }

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
