/* @flow */
import { TYPE } from './actions';

/**
 * /app/reducer:
 * Reducer for application-level state
 * @module app/reducer
 */
const defaultInitialState = {
  route: {},
};

/**
 * Returns a reducer populated with a default
 * initial state, unless an explicit initial
 * state is provided.
 * @function getApplicationReducer
 * @param {Object} [initialState] - Hydrate the reducer with an initial state
 */
export default function getApplicationReducer(
  initialState: Object = defaultInitialState,
): Function {
  const initState = initialState;

  /**
   * Reducer for Application-level state
   * @function ApplicationReducer
   * @param {Object} [state] - Current store state
   * @param {Object} action
   */
  return function ApplicationReducer(
    state: Object = initState,
    action: Object,
  ): Object {
    switch (action.type) {
      case TYPE.ROUTE_CHANGE:
        return { ...state, route: action.payload };
      default:
        return state;
    }
  };
}
