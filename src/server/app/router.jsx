/* @flow */
import React from 'react';

import Application from 'app';
import { fetchConfig } from 'app/config';
import store from 'app/store';
import createRouter, { createHandler } from 'app/router';
import renderToString from './renderToString';
import template from './template';

function manifestFetcher() {
  let manifest;

  return function fetchManifest() {
    return new Promise(async function getManifest(resolve, reject) {
      if (manifest) {
        resolve(manifest);
      } else {
        try {
          // eslint-disable-next-line fp/no-mutation
          manifest = await fetchConfig('manifest');
          resolve(manifest);
        } catch (err) {
          reject(err);
        }
      }
    });
  }
}

const fetchManifest = manifestFetcher();

/**
 * Adapt the application router for use on the server.
 * Instantiate a router, start the router with the
 * request url, render the resulting Application root
 * into the response.
 */
export default async function router(ctx: Object): Promise<void> {
  const pathname: String = ctx.request.url;
  const manifest = await fetchManifest();
  const routerInstance = await createRouter();
  const routeHandler = createHandler(store.dispatch, function setBody() {
    const app = renderToString(<Application initialPath={pathname} manifest={manifest} />);
    ctx.body = template(app);
  });

  routerInstance.start(pathname, routeHandler);
};
