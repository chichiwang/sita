/* @flow */
import Router5 from 'router5';

import config from 'app/config';
import Actions from 'app/actions';
import { isNode } from 'lib/runtime';

const routerConfig: Object = {
  trailingSlash: true,
};

/**
 * If the runtime env is Node.js, returns an instance
 * of Router5 with the routes retrieved from the
 * `server/app/routes` module. Otherwise returns undefined.
 */
function initialRouter(): Object | void {
  if (isNode) {
    // eslint-disable-next-line global-require
    return new Router5(require('server/app/routes').default, routerConfig);
  }

  return undefined;
}

/**
 * Returns a function used to get the configured router instance.
 */
function routerFetcher(): Function {
  let router: Object | void = initialRouter();

  /**
   * Returns a promise that resolves to the configured router instance.
   */
  return function fetchRouter(): Promise<Object> {
    /**
     * Resolves the configured router instance if it exists.
     * If not, attempts to retrieve the routes configuration
     * then creates the router instance with the configurations
     * and resolves it.
     */
    return new Promise(async function getRouter(resolve, reject): void {
      if (router) {
        resolve(router);
      } else {
        try {
          const routes = await config.fetch('routes');
          // eslint-disable-next-line fp/no-mutation
          router = new Router5(routes, routerConfig);
          resolve(router);
        } catch (err) {
          reject(err);
        }
      }
    });
  };
}

const fetchRouter = routerFetcher();

/**
 * Returns a router5 route handler
 * @param {Function} dispatch - store dispatcher
 * @param {Function} [callback] - callback function to execute after route resolution
 */
export function createHandler(dispatch, callback) {
  return function routeHandler(err, state) {
    if (err) {
      console.log('err >>', err);
      console.log('state >>', state);
    } else {
      console.log('state >>', state);
      dispatch(Actions.route.change(state));
    }

    if (callback) callback();
  };
}

/**
 * Returns a cloned router, using the fixed
 * configurations defined in `routerConfig`
 */
export default (async function createRouter() {
  try {
    const routerInstance = await fetchRouter();
    return routerInstance.clone();
  } catch (err) {
    throw err;
  }
});
