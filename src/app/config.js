/* @flow */
import fetch from 'isomorphic-fetch';

const config = {
  title: 'Sita Boilerplate',
  lang: 'en',

  variables: {
    state: 'Sita.state',
    env: 'Sita.env',
  },

  development: {
    servers: {
      assets: 'http://127.0.0.1:8001',
    },
  },
  production: {
    servers: {
      assets: 'https://mock.cdn.server/assets',
    },
  },
};

export default config;

/**
 * Returns a function used to get a JSON file config
 */
function configFetcher(): Function {
  // eslint-disable-next-line global-require
  const env = require('lib/env').default;
  const runtime = env('NODE_ENV');
  const configs = {};

  /**
   * Returns a promise that resolves to the requested JSON file config
   */
  return function fetchConfig(cfg): Object {
    // dynamically retrieve the routes
    const cfgPath = `config/${cfg}.json`;
    const cfgUrl = `${config[runtime].servers.assets}/${cfgPath}`;

    /**
     * Resolves the request config file if it exists.
     * If not, attempts to retrieve the requested config,
     * caches it in memory, and then resolves it.
     */
    return new Promise(function fetchCfg(resolve, reject): void {
      if (configs[cfg]) {
        resolve(configs[cfg]);
      } else {
        fetch(cfgUrl)
          .then(function responseFetched(response) {
            return response.json();
          })
          .then(function jsonFetched(json) {
            configs[cfg] = json; // eslint-disable-line fp/no-mutation
            resolve(json);
          })
          .catch(function jsonErr(err) {
            reject(err);
          });
      }
    });
  };
}

export const fetchConfig = configFetcher();
