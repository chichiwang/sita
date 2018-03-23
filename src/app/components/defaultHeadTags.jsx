/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from 'app/config';
import env from 'lib/env';
import store from 'app/store';

const globalInitialStateVar = 'ReduxInitialState';
const assetsPath = config[env('NODE_ENV')].servers.assets;

const defaultBundleNames = ['app.js'];

/**
 * Looks up an `assetName` in the webpack manifest. If the asset name
 * was found, returns a correct asset tag for the asset. Otherwise returns
 * `null`.
 */
function assetTag(assetName: string): Element | null {
  const assetPath = `${assetsPath}/${assetName}`;
  if (assetName.match(/\.js$/)) {
    return <script key={assetName} type="text/javascript" src={assetPath} />;
  } else if (assetName.match(/\.css$/)) {
    return <link key={assetName} rel="stylesheet" href={assetPath} />;
  }
  return null;
}

/**
 * Set the default head tags based on the config.
 * Sets the title, HTML `lang` attribute, ReduxInitialState
 * in the global scope.
 */
class DefaultHeadTags extends Component {
  static propTypes: Object = {
    manifest: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  state = {
    mounted: false
  };

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState(function setMounted() {
      return {
        mounted: true,
      };
    });
  }

  /**
   * Given a bundle name, returns the corresponding
   * asset tag.
   */
  bundleTag(bundleName: string): Element | null {
    const assetName = this.props.manifest[bundleName];
    if (bundleName === undefined) return null;
    return assetTag(assetName);
  }

  /**
   * Given an array of asset tags and a bundle name,
   * returns a new array of asset tags appending the
   * bundle aset tag to the list.
   */
  appendBundleTag = (tags: Array<Element | null>, bundleName: String): Array<Element | null> =>
    [...tags, this.bundleTag(bundleName)];

  /**
   * Returns a list of asset tags based on the
   * array `defaultBundleNames`.
   */
  defaultBundleTags(): Array<Element | null> {
    return defaultBundleNames.reduce(this.appendBundleTag, []);
  }

  /**
   * Returns a script tag that sets the store state
   * in the global scope when this component has not
   * yet mounted. Returns null when this component
   * has mounted.
   */
  setInitialState() {
    if (this.state.mounted) return null;
    return (
      <script type="text/javascript">
        { `const ${globalInitialStateVar} = ${JSON.stringify(store.getState())}` }
      </script>
    );
  }

  render() {
    return (
      <Helmet>
        <title>{config.title}</title>
        { this.defaultBundleTags() }
        { this.setInitialState() }
        <html lang={config.lang} />
      </Helmet>
    );
  }
}

export default DefaultHeadTags;
