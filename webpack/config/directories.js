const path = require('path');

const root = path.join(__dirname, '../..');
const assets = path.join(root, 'assets');
const src = path.join(root, 'src');

const app = path.join(src, 'app');
const client = path.join(app, 'client');

const routes = path.join(src, 'routes');

module.exports = {
  app,
  assets,
  client,
  root,
  routes,
  src,
};
