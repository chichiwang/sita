/* eslint-disable import/no-extraneous-dependencies */
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
];

module.exports = {
  development,
  production,
};
