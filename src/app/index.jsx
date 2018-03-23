/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from 'app/store';
import ConnectedApplication from './components/connected/root';

/**
 * Root-level wrapper component for the application.
 * Connects the store Provider to the root presentation
 * component.
 */
export default function Application({ initialPath, manifest }) {
  const applicationProps = {
    initialPath,
    manifest,
  };

  return (
    <Provider store={store}>
      <ConnectedApplication {...applicationProps} />
    </Provider>
  );
};

Application.propTypes = {
  initialPath: PropTypes.string.isRequired,
  manifest: PropTypes.objectOf(PropTypes.string).isRequired,
};
