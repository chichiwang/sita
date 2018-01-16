const path = require('path');

const root = path.join(__dirname, '../..');
const assets = path.join(root, 'assets');
const src = path.join(root, 'src');
const routes = path.join(src, 'routes');

module.exports = {
  assets,
  root,
  routes,
  src,
};
