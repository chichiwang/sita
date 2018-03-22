/* @flow */
import { createStore } from 'redux';

import getApplicationReducer from 'app/reducer';

// TODO:
// Check for global initialState for reducer
// Hydrate with initialState if it exists
const applicationReducer = getApplicationReducer();
const store = createStore(applicationReducer);

export default store;
