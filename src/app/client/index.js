/* @flow */
import createRouter from 'app/router';
import store from 'app/store';

createRouter().then(function routerRetrieved(router) {
  console.log('router', router);
});

/**
 * Load the router, render to page
 */

/* TODO:
 * 1. Instantiate the store with the initial store state
 * 2. Retrieve the manifest
 * 3. Instantiate router with initial route state in store and use the universal route handler
 * 4. Renders the app to the page (set up webpack configs)
 *
 * Note: App will handle async retrieval of bundles using dynamic import
 */
