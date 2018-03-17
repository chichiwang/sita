/* @flow */
import fetch from 'isomorphic-fetch';

import env from 'lib/env';
import config from 'app/config';

let routes;

export default function retrieveRoutes() {
  // dynamically retrieve the routes
  const runtime = env('NODE_ENV');
  const routesPath = 'config/routes.json';
  const routesUrl = `${config[runtime].servers.assets}/${routesPath}`;

  return new Promise(function fetchRoutes(resolve, reject) {
    if (routes) return resolve(routes);
    return fetch(routesUrl)
      .then(function responseFetched(response) {
        return response.json();
      })
      .then(function jsonFetched(json) {
        routes = json; // eslint-disable-line fp/no-mutation
        resolve(json);
      }).catch(function jsonErr(err) {
        reject(err);
      });
  });
};
