/* @flow */
import createRouter from 'app/router';

createRouter().then(function routerRetrieved(router) {
  console.log('router', router);
});

/**
 * Load the router, render to page
 */

/* TODO:
 * 1. Retrieve routes config (API/GlobalObject/static file?)
 *   - Static file option:
 *     - Create script to generate routes config JSON file
*      - Use script with webpack plugin: https://www.npmjs.com/package/webpack-shell-plugin
 * 2. Instantiate router and uses the universal route handler
 * 3. Renders the app to the page (set up webpack configs)
 *
 * Note: App will handle async retrieval of bundles using dynamic import
 */
