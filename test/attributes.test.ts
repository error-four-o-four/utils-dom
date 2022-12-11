/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from 'vitest';
import { dom } from '../src/main';

const elt = document.createElement('div');

describe('dom.addClass()', () => {
	it('adds a single class to a HTMLElement', () => {
		dom.addClass(elt, 'test');
		expect(elt.classList).toHaveLength(1);
	});

	it('adds mutliple classes to a HTMLElement', () => {
		dom.addClass(elt, 'test-a', 'test-b', 'test-c');
		expect(elt.classList).toHaveLength(4);
	});
})

describe('dom.hasClass()', () => {
	it('returns \'false\' if a class does not exist in the class list of a HTMLElement', () => {
		const classExists = dom.hasClass(elt, 'test-morp');
		expect(classExists).toBe(false);
	})

	it('returns \'true\' if a class exists in the class list of a HTMLElement', () => {
		const classExists = dom.hasClass(elt, 'test');
		expect(classExists).toBe(true);
	})
})

describe('dom.removeClass()', () => {
	it('removes a single class to a HTMLElement', () => {
		dom.removeClass(elt, 'test');
		expect(elt.classList).toHaveLength(3);
	});

	it('removes mutliple classes to a HTMLElement', () => {
		dom.removeClass(elt, 'test-a', 'test-b', 'test-c');
		expect(elt.classList).toHaveLength(0);
	});
})

describe('dom.toggleClass()', () => {
	it('toggles a single class to a HTMLElement', () => {
		dom.toggleClass(elt, 'test');
		expect(elt.classList).toHaveLength(1);
		dom.toggleClass(elt, 'test');
		expect(elt.classList).toHaveLength(0);
	});

	it('toggles mutliple classes to a HTMLElement', () => {
		dom.toggleClass(elt, 'test-a', 'test-b', 'test-c');
		expect(elt.classList).toHaveLength(3);
		dom.toggleClass(elt, 'test-a', 'test-b');
		expect(elt.classList).toHaveLength(1);
	});

})
