const createElement = (...args) => {
	if (args.length === 1) return document.createElement(args[0]);

	const elt = document.createElement(args.shift());
	for (const arg of args) {
		if (typeof arg === 'string') {
			const type = arg.substr(0, 1);
			const value = arg.substr(1);
			if (type === '#') elt.id = value;
			if (type === '.') elt.classList.add(value);
		}
	}
	return elt;
}

const create = (...args) => {
	return (
		(args[0] instanceof HTMLElement)
		? args.shift().appendChild(createElement(...args))
		// ? append(args.shift(), createElement(...args))
		: createElement(...args)
	)
}