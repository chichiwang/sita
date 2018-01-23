/* @flow */
import { createStore } from 'redux';

import getApplicationReducer from './reducers';

const applicationReducer = getApplicationReducer();
const store = createStore(applicationReducer);

export default store;
