/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isBrowser } from 'lib/runtime';

import createRouter, { createHandler } from 'app/router';
import DefaultHeadTags from 'app/components/defaultHeadTags';
import BaseTemplate from 'components/template';

/**
 * Root-level presentational component for the application.
 * Accepts a route object and renders the corresponding
 * page-level component.
 */
class Application extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    initialPath: PropTypes.string.isRequired,
    route: PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      meta: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    if (isBrowser) this.initRouter();
  }

  /**
   * Initialize the router instance
   */
  initRouter = () => {
    this.router = createRouter();
    this.router.start(this.props.initialPath, createHandler(this.props.dispatch));
  }

  render() {
    const { route } = this.props;

    return (
      <BaseTemplate>
        <DefaultHeadTags />
        <pre>
          { JSON.stringify(route, null, 2) }
        </pre>
      </BaseTemplate>
    );
  }
};

export default Application;
