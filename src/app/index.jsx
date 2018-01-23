/* @flow */
import React from 'react';
import { Provider } from 'react-redux';

import store from 'store';
import ConnectedApplication from './components/connected/root';

/**
 * Root-level wrapper component for the application.
 * Connects the store Provider to the root presentation
 * component.
 */
export default function Application() {
  return (
    <Provider store={store}>
      <ConnectedApplication />
    </Provider>
  );
};
