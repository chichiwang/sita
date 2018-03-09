const entry = require('./config/entry');
const plugins = require('./config/plugins').production;
const resolve = require('./config/resolve');
const rules = require('./config/rules');
const output = require('./config/output').production;

module.exports = {
  resolve,
  plugins,
  entry,
  module: {
    rules,
  },
  output,
};
