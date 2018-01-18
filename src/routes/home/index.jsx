/* @flow */
import React from 'react';

import type { Element } from 'react';

import RootComponent from './components';

export default {
  name: 'home',
  path: '/',
  action(): Element<*> {
    return <RootComponent />;
  },
};
