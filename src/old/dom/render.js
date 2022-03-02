const render = ({type, props = {}}, container) => {
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