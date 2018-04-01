/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';

import Application from 'app';
import config, { fetchConfig } from 'app/config';
import createRouter, { createHandler } from 'app/router';
import store from 'app/store';

Promise.all([createRouter(), fetchConfig('manifest')])
  .then(function initApp(results) {
    const [router, manifest] = results;
    const routeState = store.getState().route;
    const pathname = routeState.path;
    const routeHandler = createHandler(store.dispatch);

    router.start(routeState, routeHandler);

    const container = document.getElementById(config.containerId);
    ReactDOM.hydrate(<Application initialPath={pathname} manifest={manifest} />, container);
  });
