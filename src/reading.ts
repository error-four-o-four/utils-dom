/**
 *
 * @param {HTMLElement} elt
 * @returns {string}
 */
export const toString = (elt: HTMLElement): string => `${elt.localName}${(elt.id !== '')
	? '#' + elt.id
	: ''}${(elt.classList?.length > 0)
		? '.' + Array.from(elt.classList).join('.')
		: ''}`

/**
 * Cast querySelectorAll to Array
 * @param {string} arg
 * @returns
 */
export const get = (arg: string): never | HTMLElement | HTMLElement[] => {
	let elts = Array.from(document.querySelectorAll(arg));

	if (elts.length === 1 && elts[0]) {
		return elts[0] as HTMLElement;
	}

	if (elts.length > 1) {
		return elts as HTMLElement[];
	}

	throw new Error(`Invalid argument - the HTMLElement '${arg}' does not exist.`)
}