/* @flow */
import React from 'react';
import PropTypes from 'prop-types';

import BaseTemplate from 'components/template';

/**
 * Root-level presentational component for the application.
 * Accepts a route object and renders the corresponding
 * page-level component.
 */
function Application({ route }) {
  return (
    <BaseTemplate>
      <pre>
        { JSON.stringify(route, null, 2) }
      </pre>
    </BaseTemplate>
  );
};

Application.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Application;
