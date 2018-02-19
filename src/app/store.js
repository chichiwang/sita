/* @flow */
import { createStore } from 'redux';

import getApplicationReducer from 'app/reducer';

const applicationReducer = getApplicationReducer();
const store = createStore(applicationReducer);

export default store;
