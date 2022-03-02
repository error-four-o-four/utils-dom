const getElementsByArg = (arg) => {
	if (typeof arg !== 'string') return undefined;
	switch (arg.charAt(0)) {
    case ('.'): {
      return [...document.body.getElementsByClassName(arg.substring(1))];
    }
    case ('#'): {
      return [document.getElementById(arg.substring(1))];
    }
    case ('['): {
      return [...document.querySelectorAll(arg)];
    }
    default:
      return [...document.body.getElementsByTagName(arg)];
  }
}

const get = (...args) => {
	const elts = [];
  for (const arg of args) elts.push(...getElementsByArg(arg))
  return (elts.length === 1) ? elts[0] : elts;
}