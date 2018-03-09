const entry = require('./config/entry');
const plugins = require('./config/plugins').development;
const resolve = require('./config/resolve');
const rules = require('./config/rules');
const output = require('./config/output').development;

module.exports = {
  devtool: 'inline-source-map',
  resolve,
  plugins,
  entry,
  module: {
    rules,
  },
  output,
};
