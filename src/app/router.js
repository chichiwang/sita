/* @flow */
import Router5 from 'router5';

import routes from 'server/app/routes';
import Actions from 'app/actions';

const routerConfig: Object = {
  trailingSlash: true,
};

const router: Object = new Router5(routes, routerConfig);

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
export default function createRouter() {
  return router.clone();
}
