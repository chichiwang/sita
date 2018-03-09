const directories = require('./directories');

const sharedConfig = {
  path: directories.assets,
  publicPath: '',
};

const development = Object.assign({}, sharedConfig, {
  filename: 'js/[name].js',
});

const production = Object.assign({}, sharedConfig, {
  filename: 'js/[name].[chunkhash].js',
});

module.exports = {
  development,
  production,
};
