/// <reference lib="dom" />

const prefixes: string[] = ["#", "."];

/**
 * @param arg
 * @returns boolean
 */

export const hasPrefix = (arg: string): boolean => {
  for (const char of prefixes) {
    if (arg.charAt(0) === char) return true;
  }
  return false;
};

/**
 * @param arg
 * @returns string[]
 */

export const getPrefixSelector = (arg: string): string[] => {
  return hasPrefix(arg) ? [arg.slice(0, 1), arg.slice(1)] : ["", arg];
};
