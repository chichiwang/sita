/* @flow */
import React from 'react';

import Application from 'app';
import store from 'app/store';
import createRouter, { createHandler } from 'app/router';
import renderToString from './renderToString';
import template from './template';

/**
 * Adapt the application router for use on the server.
 * Instantiate a router, start the router with the
 * request url, render the resulting Application root
 * into the response.
 */
export default async function router(ctx: Object): Promise<void> {
  const pathname: String = ctx.request.url;
  const routerInstance = createRouter();
  const routeHandler = createHandler(store.dispatch, function setBody() {
    const app = renderToString(<Application initialPath={pathname} />);
    ctx.body = template(app);
  });

  routerInstance.start(pathname, routeHandler);
};
