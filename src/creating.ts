/**
 *
 * @param {HTMLELement} parent
 * @param  {...HTMLELement} children
 * @returns
 */
export const append = (parent: HTMLElement, ...children: HTMLElement[]) => {
	if (children.length === 1) {
		return parent.appendChild(children[0]);
	}

	return children.reduce((all: HTMLElement[], child: HTMLElement) => {
		parent.appendChild(child);
		return [...all, child];
	}, []);
}

/////////////////////////////////////////////////////////////////////////////////////

const validateElement = (arg: string): never | HTMLElement => {
	let elt: null | HTMLElement;

	elt = document.createElement(arg);
	if (!elt) throw new Error('not a valid argument');

	return elt as HTMLElement;
}

const createElement = (...args: string[]): never | HTMLElement => {
	let elt: HTMLElement;

	if (args.length === 1) return validateElement(args[0]);

	const tagName: string = args.reduce((prev: string, curr: string) => (!curr.match(/#/) && !curr.match(/\./)) ? curr : prev, args[0]);

	elt = validateElement(tagName);
	args.splice(args.indexOf(tagName), 1);

	for (let arg of args) {
		if (arg.match(/#/)) {
			elt.id = arg.substring(1);
			continue;
		}
		elt.classList.add(arg.substring(1));
	}

	return elt;
}

/**
 *
 * @param {string | HTMLElement} parent
 * @param {string[]} args
 * @returns
 */
export const create = (parent: string | HTMLElement, ...args: string[]) => {
	return (
		(parent instanceof HTMLElement)
			? append(parent, createElement(...args))
			: createElement(parent, ...args)
	)
}

/////////////////////////////////////////////////////////////////////////////////////

const removeElement = (arg: string | HTMLElement): void => {
	let elt: HTMLElement | NodeList = (arg instanceof HTMLElement) ? arg : document.querySelectorAll(arg);

	if (elt instanceof NodeList) {
		for (const node of elt) node.parentElement?.removeChild(node);
		return;
	}
	elt.parentElement?.removeChild(elt);
}

/**
 *	remove multiple elements
 * @param {string[] | HTMLElement[] | [HTMLElement | HTMLElement[]]} args
 */
export const remove = (...args: string[] | HTMLElement[] | [HTMLElement | HTMLElement[]]): void => {
	/**@todo guard clause single argument => performance */

	const values = [];

	for (const arg of args) (Array.isArray(arg)) ? values.push(...arg) : values.push(arg);

	/**@toLearn */
	// const reducer = ((prev: string[] | HTMLElement[], curr: string[] | HTMLElement[] | [HTMLElement | HTMLElement[]]) => (Array.isArray(curr)) ? [...prev, ...curr] : [...prev, curr])
	// const values = args.reduce(reducer, []);

	for (const value of values) removeElement(value)
}