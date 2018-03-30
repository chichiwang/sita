/* @flow */
// TODO: Add JSDOC documentation
import { isBrowser } from 'lib/runtime';

let config;
let data;
let appEnv;

const defaults = {
  NODE_ENV: 'local',
};

export default function env(envVar: string): string | void {
  if (isBrowser && !config) {
    // eslint-disable-next-line
    config = require('app/config').default;
    // eslint-disable-next-line
    data = require('lib/globalData').default;
    // eslint-disable-next-line
    appEnv = data.get(config.variables.env);
    console.log('env', config.variables.env, appEnv);
  }

  const envVal = process && process.env[envVar] || appEnv && appEnv[envVar];
  return envVal === 'undefined' ? defaults[envVar] : envVal;
}
