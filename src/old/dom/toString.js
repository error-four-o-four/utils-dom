const toString = (elt) => `${elt.localName}${(elt.id !== '')	? '#' + elt.id : ''}${(elt.classList.length > 0) ? '.' + [...elt.classList].join('.') : ''}`;