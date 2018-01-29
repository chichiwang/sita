/* @flow */
/**
 * runtime:
 * Helpers to detect the runtime environment
 * @module runtime
 */

const BROWSER = 'browser';
const NODE = 'node';

/**
 * Indicates if the current runtime is the browser
 * @type {boolean}
 */
export const isBrowser: boolean =
  typeof window !== 'undefined' &&
  Object.prototype.toString.call(window) === '[object Window]';

/**
 * Indicates if the current runtime is the Node.js
 * @type {boolean}
 */
export const isNode: boolean =
  typeof global !== 'undefined' &&
  Object.prototype.toString.call(global) === '[object global]';

/**
 * Returns a string `'browser'` or `'node'` depending on what the
 * current runtime environment is. Returns `undefined` if neither.
 * @function get
 * @example
 * import { get } from 'lib/runtime'
 * console.log(get()); // 'browser'
 */
export function get(): ?string {
  if (isBrowser) return BROWSER;
  if (isNode) return NODE;
  return undefined;
}

export default {
  isBrowser,
  isNode,
  get,
};
