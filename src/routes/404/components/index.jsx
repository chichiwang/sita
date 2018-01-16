/* @flow */
import React from 'react';
import PropTypes from 'prop-types';

import type { Element } from 'react';

function NotFound({ ctx }): Element<*> {
  return <p>{`404 Error - route "${ctx.pathname}" not found!`}</p>;
};

NotFound.propTypes = {
  ctx: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default NotFound;
