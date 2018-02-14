/* @flow */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import fs from 'fs';
import path from 'path';

/**
 * A list of patterns for excluded directories.
 * These directories will be excluded from the
 * server-side routes manifest.
 */
const excludedPatterns = [/^__.+__$/];

/**
 * Given a directory name, checks if the directory
 * name is not match the list of excluded patterns.
 */
function notExcluded(dirname: string): boolean {
  return !excludedPatterns.reduce(function testExclusion(
    result: boolean,
    pattern: RegExp,
  ): boolean {
    return Boolean(dirname.match(pattern)) || result;
  },
  false);
}

/**
 * Given a file name, checks if the file is a directory within
 * the current module-directory `/src/routes`.
 */
function directories(file: string): boolean {
  return fs.statSync(path.join(__dirname, file)).isDirectory();
}

/**
 * Given a directory name, returns the default export
 * of the directory relative to this module-directory
 * `/src/routes`.
 */
function routeConfig(dir: string): Object {
  return require(`./${dir}`).default;
}

const routes: Array<Object> = fs
  .readdirSync(__dirname)
  .filter(directories)
  .filter(notExcluded)
  .map(routeConfig);

export default routes;
