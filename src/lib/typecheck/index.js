/* @flow */

/**
 * Array of supported types for detection
 * @type {string[]}
 */
const types: string[] = [
  'Array',
  'Boolean',
  'Date',
  'Function',
  'GeneratorFunction',
  'Global',
  'Null',
  'Number',
  'Object',
  'Promise',
  'RegExp',
  'String',
  'Undefined',
  'Window',
];

/**
 * Returns a string representing the true type of the value
 * @function get
 * @param {*} val - Value to typecheck
 * @example
 * get('string'); // 'String'
 * get(1337); // 'Number'
 * get(new Date()); // 'Date'
 */
export default function get(val: any): string {
  // http://stackoverflow.com/a/2801629
  // eslint-disable-next-line no-self-compare
  if (Number.isNaN(val) && val !== val) return 'NaN';
  return Object.prototype.toString.call(val).replace(/\[object (.*)\]/, '$1');
}

/**
 * Returns the name of the detector function for any given
 * type
 * @function detectorName
 * @param {string} type
 */
function detectorName(type: string): string {
  return `is${type}`;
}

/**
 * Factory that returns a function that will return a boolean
 * indicating if a provided value is of the given type
 * @function typeDetector
 * @param {string} type
 */
function typeDetector(type: string): Function {
  // eslint-disable-next-line func-names
  const fn: Function = function(val: any): boolean {
    return get(val) === type;
  };

  Object.defineProperty(fn, 'name', { value: detectorName(type) });
  return fn;
}

/**
 * Returns a boolean indicating if the provided value is
 * a `NaN`
 * @function isNaN
 * @example
 * import { isNaN } from 'lib/typecheck';
 * isNaN(5); // false
 * isNaN(5 * 'million'); // true
 */
function isNaN(val: any): boolean {
  return get(val) === 'NaN';
}

/**
 * Dynamically exports all individual type detectors
 */
(function exportTypeDetectors(): void {
  module.exports.isNaN = isNaN;

  types.forEach(function exportTypeDetector(type: string): void {
    // console.log('exportTypeDetector', type, typeDetector(type));
    module.exports[detectorName(type)] = typeDetector(type);
  });
})();
