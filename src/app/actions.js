/**
 * Action type constants for Application Actions
 */
export const TYPE = {
  ROUTE_CHANGE: 'ROUTE:CHANGE',
};

/**
 * Action creators for Application Route Actions
 */
const route = {
  change: function changeRoute(payload) {
    return {
      type: TYPE.ROUTE_CHANGE,
      payload,
    };
  },
};

export default {
  route,
};
