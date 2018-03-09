const path = require('path');

const directories = require('./directories');

module.exports = {
  app: path.join(directories.client, 'index.js'),
};
