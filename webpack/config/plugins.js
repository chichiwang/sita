/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

const sharedPlugins = [];

const development = [
  ...sharedPlugins,
];

const production = [
  ...sharedPlugins,
  new webpack.optimize.UglifyJsPlugin(),
  new ManifestPlugin({ filename: 'manifest.json' }),
];

module.exports = {
  development,
  production,
};
