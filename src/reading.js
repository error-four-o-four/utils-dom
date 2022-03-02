/**
 *
 * @param {HTMLElement} elt
 * @returns string
 */
export const toString = (elt) => {
	return `${elt.localName}${
		(elt.id !== '')
		? '#' + elt.id
		: ''}${
		(elt.classList.length > 0)
		? '.' + [...elt.classList].join('.')
		: ''}`
}

/**
 *
 * @param  {...string} args
 * @returns HTMLElement|Array
 */
 export const get = (...args) => {
	const elts = args.reduce((all, arg) => {
    [...all, ...document.querySelectorAll(arg)]
  }, [])
  return (elts.length === 1) ? elts[0] : elts;
}

// const getElementsByArg = (arg) => {
// 	if (typeof arg !== 'string') return undefined;
// 	switch (arg.charAt(0)) {
//     case ('.'): {
//       return [...document.body.getElementsByClassName(arg.substring(1))];
//     }
//     case ('#'): {
//       return [document.getElementById(arg.substring(1))];
//     }
//     case ('['): {
//       return [...document.querySelectorAll(arg)];
//     }
//     default:
//       return [...document.body.getElementsByTagName(arg)];
//   }
// }

// /**
//  *
//  * @param  {...string} args
//  * @returns HTMLElement|Array
//  */
// export const get = (...args) => {
// 	const elts = [];
//   for (const arg of args) elts.push(...getElementsByArg(arg))
//   return (elts.length === 1) ? elts[0] : elts;
// }