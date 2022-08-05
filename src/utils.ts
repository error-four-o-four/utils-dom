/// <reference lib="dom" />

const prefixes: string[] = ['#', '.']

export const hasPrefix = (arg: string): boolean => {
	for (const char of prefixes) {
		if (arg.charAt(0) === char) return true;
	}
	return false;
}

export const getPrefixSelector = (arg: string): string[] => {
	return (hasPrefix(arg))
		? [arg.slice(0, 1), arg.slice(1)]
		: ['', arg]
}
