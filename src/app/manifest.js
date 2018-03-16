/* @flow */
import fetch from 'isomorphic-fetch';

import env from 'lib/env';
import config from 'app/config';

let manifest;

export default function retrieveFileManifest() {
  // dynamically retrieve the file manifest
  const runtime = env('NODE_ENV');
  const manifestPath = 'config/manifest.json';
  const manifestUrl = `${config[runtime].servers.assets}/${manifestPath}`;

  return new Promise(function fetchManifest(resolve, reject) {
    if (manifest) return resolve(manifest);
    return fetch(manifestUrl)
      .then(function responseFetched(response) {
        return response.json();
      })
      .then(function jsonFetched(json) {
        manifest = json; // eslint-disable-line fp/no-mutation
        resolve(json);
      }).catch(function jsonErr(err) {
        reject(err);
      });
  });
};
