/* @flow */
import Router5 from 'router5';

import routes from 'routes/server';

const routerConfig: Object = {
  trailingSlash: true,
};

const router: Object = new Router5(routes, routerConfig);

export default function createRouter() {
  return router.clone();
}
