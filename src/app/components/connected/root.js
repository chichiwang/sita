/* @flow */
import { connect } from 'react-redux';

import Application from 'app/components/root';

/**
 * Connects Application component to the store
 * to provide the route object.
 */
function mapStateToProps(state) {
  return {
    route: state.route,
  };
}

const Connected = connect(mapStateToProps)(Application);

export default Connected;
