/* @flow */
import { createStore } from 'redux';

import getApplicationReducer from 'app/reducer';
import config from 'app/config';

import { isBrowser } from 'lib/runtime';
import data from 'lib/globalData';

// TODO:
// Check for global initialState for reducer
// Hydrate with initialState if it exists
const initialState = isBrowser ?
  data.get(config.variables.state) :
  undefined;

const middlewares = isBrowser ?
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() :
  undefined;

const applicationReducer = getApplicationReducer(initialState);
const store = createStore(applicationReducer, middlewares);

export default store;
