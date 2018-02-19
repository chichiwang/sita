/* @flow */
import React from 'react';
import ReactDomServer from 'react-dom/server';

import Application from 'app';
import store from 'app/store';
import createRouter, { createHandler } from 'app/router';
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
    ctx.body = template(ReactDomServer.renderToString(<Application initialPath={pathname} />));
  });

  routerInstance.start(pathname, routeHandler);
};
