// export const append = (parent, child) => {
// 	return parent.appendChild(child);
// }

/**
 *
 * @param {HTMLELement} parent
 * @param  {...HTMLELement} children
 * @returns
 */
 export const append = (parent, ...children) => {
	return children.reduce((all, child) => {
		parent.appendChild(child);
		return [...all, child];
	}, []);
}

const splitAt = index => x => [x.slice(0, index), x.slice(index)];

const createElement = (...args) => {
	if (args.length === 1) return document.createElement(args[0]);

	const elt = document.createElement(args.shift());
	for (const arg of args) {
		if (typeof arg !== 'string') {
			console.warning(`${arg} is not a valid argument`);
			continue;
		} else {
			const [type, value] = splitAt(1)(arg);
			if (type === '#') elt.id = value;
			if (type === '.') elt.classList.add(value);
		}
	}
	return elt;
}

export const create = (parent, ...args) => {
	return (
		(parent instanceof HTMLElement)
		? append(parent, createElement(...args))
		: createElement(...args)
	)
}

export const render = ({type, props = {}}, container) => {
  const isTextElement = !type;
  const element = isTextElement
    ? document.createTextNode('')
    : document.createElement(type);

  const isListener = p => p.startsWith('on');
  const isAttribute = p => !isListener(p) && p !== 'children';

	for (const p of Object.keys(props)) {
		if (isAttribute(p)) element[p] = props[p];
		if (!isTextElement && isListener(p)) {
			element.addEventListener(p.toLowerCase().slice(2), props[p]);
		}
	}

  if (!isTextElement && props.children && props.children.length) {
		for (const child of props.children) render(child, element);
	}

  return container.appendChild(element);
};

export const remove = (element) => element.parentNode.removeChild(element);

// export const empty = (element) => {};
