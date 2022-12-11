/**
 * @vitest-environment jsdom
 */

import { describe, expect, it, vi } from 'vitest';
import { dom } from '../src/main';


describe('dom.create()', () => {
	it('creates a single element', () => {
		const result = dom.create('div');
		expect(result).toBeInstanceOf(HTMLDivElement);
	});

	it('creates a single element with a given id', () => {
		const result = dom.create('div', '#my-div') as HTMLElement;
		expect(result).toHaveProperty('id');
		expect(result.id).toBe('my-div')
	});

	it('creates a single element with a given id and a class', () => {
		const result = dom.create('div', '#my-div', '.class-a') as HTMLElement;
		// console.log(toString(result));
		expect(result).toHaveProperty('id');
		expect(result.id).toBe('my-div')
		expect(result.classList).not.toHaveLength(0);
		expect(result.classList.contains('class-a')).toBe(true);
	});

	it('creates a single element with multiple classes', () => {
		const result = dom.create('div', '.class-a', '.class-b') as HTMLElement;
		// console.log(toString(result));

		expect(result.id).toBe('');
		expect(result.classList).not.toHaveLength(0);
		expect(result.classList.contains('class-a')).toBe(true);
		expect(result.classList.contains('class-b')).toBe(true);
	});

	it('appends the created element when the first argument is a HTMLElement', () => {
		const parent = document.createElement('div');
		const result = dom.create(parent, 'span', '#appended') as HTMLElement;
		// console.log(toString(result));

		expect(parent.children).toHaveLength(1);
		expect(result).toBeInstanceOf(HTMLSpanElement);
		expect(result.id).toBe('appended');
	});

	it('fails to create and append the element when the first argument is not a valid tag name', () => {
		const result = () => dom.create('morp', '#appended');
		expect(result).toThrowError();
	})
})

describe('dom.append()', () => {
	it('appends a single HTMLElement to a given parent element', () => {
		const parent = document.createElement('div');
		const child = document.createElement('span');
		dom.append(parent, child);

		expect(parent.children.length).toBe(1);
	});

	it('returns a single HTMLElement', () => {
		const parent = document.createElement('div');
		const child = document.createElement('span');
		const result = dom.append(parent, child);

		expect(result).toBeInstanceOf(HTMLSpanElement);
	});

	it('appends multiple HTMLElements to a given parent element', () => {
		const parent = document.createElement('div');
		const children = Array.from({length: 10}, () => document.createElement('div'));
		dom.append(parent, ...children);

		expect(parent.children).toHaveLength(10);
	});

	it('returns multiple HTMLElements as an array', () => {
		const parent = document.createElement('div');
		const children = Array.from({length: 10}, () => document.createElement('div'));
		const result = dom.append(parent, ...children) as HTMLElement[];

		expect(result).toBeInstanceOf(Array);
		expect(result).toHaveLength(10);
	});
});

describe('dom.remove()', () => {
	it('warns when failed', () => {
		const spy = vi.spyOn(console, 'warn');
		dom.remove('#test');
		dom.remove(document.createElement('div'));
		expect(spy).toHaveBeenCalledTimes(2);
	});

	it('removes a single HTMLElement', () => {
		document.body.innerHTML = `<div id="test">Morp</div>`;
		dom.remove(document.getElementById('test') as HTMLElement);

		expect(document.body.children).toHaveLength(0);
	});

	it('removes a single element by id', () => {
		document.body.innerHTML = `<div id="test">Morp</div>`;
		dom.remove('#test');

		expect(document.body.children).toHaveLength(0);
	});

	it('removes a single element by tag name', () => {
		document.body.innerHTML = `<div>Morp</div>`;
		dom.remove('div');

		expect(document.body.children).toHaveLength(0);
	});

	it('removes multiple elements by tag name', () => {
		document.body.innerHTML = `<div>Morp</div><div>Morp</div><div>Morp</div>`;
		dom.remove('div');

		expect(document.body.children).toHaveLength(0);
	});

	it('removes multiple elements by class name', () => {
		document.body.innerHTML = `<div class="test">Morp</div><div class="test">Morp</div><div class="test">Morp</div>`;
		dom.remove('.test');

		expect(document.body.children).toHaveLength(0);
	});

	it.skip('removes multiple HTMLElements', () => {
		// document.body.innerHTML = `<div class="test">Morp</div><div class="test">Morp</div><div class="test">Morp</div>`;
		// const elts = document.getElementsByClassName('test');
		// remove(elts);

		expect(document.body.children).toHaveLength(0);
	});
})