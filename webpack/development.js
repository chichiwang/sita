const entry = require('./config/entry');
const externals = require('./config/externals');
const plugins = require('./config/plugins').development;
const resolve = require('./config/resolve');
const rules = require('./config/rules');
const output = require('./config/output').development;

module.exports = {
  devtool: 'inline-source-map',
  resolve,
  plugins,
  entry,
  externals,
  mode: 'development',
  module: {
    rules,
  },
  output,
};
