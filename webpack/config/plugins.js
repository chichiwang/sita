/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

const sharedPlugins = [
  new ManifestPlugin({
    fileName: 'config/manifest.json',
  }),
];

const development = [
  ...sharedPlugins,
];

const production = [
  ...sharedPlugins,
  new webpack.optimize.UglifyJsPlugin(),
];

module.exports = {
  development,
  production,
};
