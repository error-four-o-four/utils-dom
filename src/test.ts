import dom from './main';

const body = dom.get('body') as HTMLElement;

for (let i = 0; i < 10; i += 1) {
	dom.create(body, '.div-class', 'div');
}
for (let i = 0; i < 10; i += 1) {
	dom.create(body, '#div-' + i, 'div');
}
for (let i = 0; i < 10; i += 1) {
	dom.create(body, '#span-' + i, 'span');
}

console.log(body.children.length)

// const elts = dom.get('.div-class, #div-1, #div-2, span');
// dom.remove(elts);

const elts = dom.get('span') as [];
dom.remove(...elts, '.div-class, #div-1, #div-2');

console.log(body.children.length)
