/* @flow */
import React, { Component } from 'react';
import Helmet from 'react-helmet';

import config from 'app/config';
import store from 'app/store';

const globalInitialStateVar = 'ReduxInitialState';

/**
 * Set the default head tags based on the config.
 * Sets the title, HTML `lang` attribute, ReduxInitialState
 * in the global scope.
 */
class DefaultHeadTags extends Component {
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
        { this.setInitialState() }
        <html lang={config.lang} />
      </Helmet>
    );
  }
}

export default DefaultHeadTags;
