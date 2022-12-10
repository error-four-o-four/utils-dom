/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from 'vitest';
import { toString, get } from '../src/reading';

document.body.innerHTML = `
<div id="my-div" class="class-a class-b">
	<span class="less-than"></span>
	<span class="less-than"></span>
	<span class="less-than"></span>
	<span class="less-than"></span>
	<span class="less-than"></span>
	<span class="greater-than"></span>
	<span class="greater-than"></span>
	<span class="greater-than"></span>
	<span class="greater-than"></span>
	<span class="greater-than"></span>
</div>
`;

describe('dom.toString()', () => {
	it('returns a string with tag name, id and classes from a HTMLElement', () => {
		const elt = document.getElementById('my-div') as HTMLElement;
		const result = toString(elt);
		expect(result)
			.toBe('div#my-div.class-a.class-b');
	});
})

describe('dom.get()', () => {
	it('throws an error when given an invalid argument', () => {
		const arg = '#div'
		const exec = () => get(arg);
		expect(exec).toThrowError(arg);
	})

	it('returns a single element by tag', () => {
		const result = get('div');
		expect(result).toBeInstanceOf(HTMLElement);
	})

	it('returns a single element by id', () => {
		const result = get('#my-div');
		expect(result).toBeInstanceOf(HTMLElement);
	});

	it('returns multiple elements by tag as an array', () => {
		const result = get('span');
		expect(result).toBeInstanceOf(Array)
		expect(result).toHaveLength(10);
	})

	it('returns multiple elements by class name as an array', () => {
		const result = get('.greater-than');
		expect(result).toBeInstanceOf(Array)
		expect(result).toHaveLength(5);
	});
})



