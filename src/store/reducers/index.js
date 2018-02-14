/* @flow */
const defaultInitialState = {
  route: undefined,
};

export default function getApplicationReducer(
  initialState: Object = defaultInitialState,
): Function {
  const initState = initialState;

  return function ApplicationReducer(
    state: Object = initState,
    action: Object,
  ): Object {
    switch (action.type) {
      case 'ROUTE:CHANGE':
        return { ...state, route: action.payload };
      default:
        return state;
    }
  };
}
