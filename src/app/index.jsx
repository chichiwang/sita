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
export default function Application({ initialPath }) {
  return (
    <Provider store={store}>
      <ConnectedApplication initialPath={initialPath} />
    </Provider>
  );
};

Application.propTypes = {
  initialPath: PropTypes.string.isRequired,
};
