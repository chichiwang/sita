import path from 'path';
import fs from 'fs';

import directories from '../config/directories';

// eslint-disable-next-line import/no-dynamic-require
const routesConfig = require(path.join(directories.routes, 'server'));

const configDir = path.join(directories.assets, 'config');
const routesTargetFile = path.join(configDir, 'routes.json');

// Create the assets/config directory
if (!fs.existsSync(configDir)) fs.mkdirSync(configDir);

// Create the routes.json file in assets/config
const routes = JSON.stringify({
  config: routesConfig,
}, null, 2);

fs.writeFile(routesTargetFile, routes, 'utf8', function createRoutesJSONCallback(err) {
  if (err) throw err;
  console.log(`[routes.json] File created at ${routesTargetFile}`);
});
