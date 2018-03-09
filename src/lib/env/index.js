/* @flow */
// TODO: Add JSDOC documentation
import { isBrowser } from 'lib/runtime';

const defaults = {
  NODE_ENV: 'local',
};

export default function env(envVar: string): string | void {
  if (isBrowser) return undefined; // TODO: Retrieve from API endpoint or global object if browser

  const envVal = process.env[envVar];
  return envVal === 'undefined' ? defaults[envVar] : envVal;
};
