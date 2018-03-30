const entry = require('./config/entry');
const externals = require('./config/externals');
const plugins = require('./config/plugins').production;
const resolve = require('./config/resolve');
const rules = require('./config/rules');
const output = require('./config/output').production;

module.exports = {
  resolve,
  plugins,
  entry,
  externals,
  mode: 'production',
  module: {
    rules,
  },
  output,
};
