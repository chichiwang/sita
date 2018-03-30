/* @flow */
import {isBrowser} from 'lib/runtime';
import {
  isArray,
  isGlobal,
  isObject,
  isString,
  isWindow,
} from 'lib/typecheck';

const separator = '.';
const globalObj = isBrowser ? window : global;

/**
 * Retrieves a value from an object in the global scope.
 * If any key in the chain does not exist, returns `undefined`.
 * @param {string} keychain - String representing the nested object chain
 * @param {Object} [parentObj] - Object to retrieve the data from
 * @example
 * // Given an object `foo = { bar: { baz: 'foobaz' } };`
 * getData('foo.bar.baz'); // 'foobaz'
 * getData('foo.baz'); // undefined
 * getData('foo.bar.baz.throw'); // undefined
 */
function getGlobalData(keychain: string, parentObj: Object = globalObj): any {
  const invalidParent = !isObject(parentObj) && !isWindow(parentObj) && !isGlobal(parentObj);
  if (invalidParent) return undefined;

  const keyMap = keychain.split(separator);
  const currVal = parentObj[keyMap[0]];
  const nextKeychain = keyMap.slice(1).join(separator);

  if (!nextKeychain.length) return currVal;
  return getGlobalData(nextKeychain, currVal);
}

/**
 * Returns a string representing the script necessary to
 * set a global object chain on the `window` object.
 * @param {string} keychain - String representing the nested object chain
 * @param {any} val - the value to set at the end of the keychain
 * @param {string} [lastKeychain] - the last chain to be set
 * @example
 * setDataScript('foo.bar.baz', 'foobaz');
 * // "window.foo = window.foo || {};\nwindow.foo.bar = window.foo.bar || {};\nwindow.foo.bar.baz = 'foobaz';"
 */
function setGlobalData(keychain: string, val: any, lastKeychain: string = 'window'): string {
  const keyMap = keychain.split(separator);
  const currKeychain = `${lastKeychain}${separator}${keyMap[0]}`;
  const nextKeychain = keyMap.slice(1).join(separator);

  if (!nextKeychain.length) {
    const valStr = isObject(val) || isArray(val) || isString(val) ?
      JSON.stringify(val) :
      val.toString();

    return `${currKeychain} = ${valStr};`;
  }

  return `${currKeychain} = ${currKeychain} || {};\n${setGlobalData(nextKeychain, val, currKeychain)}`;
}

export default {
  get: getGlobalData,
  set: setGlobalData,
};
