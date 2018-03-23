/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import type { Element } from 'react';

import createRouter, { createHandler } from 'app/router';
import DefaultHeadTags from 'app/components/defaultHeadTags';
import { isBrowser } from 'lib/runtime';
import BaseTemplate from 'components/template';

/**
 * Root-level presentational component for the application.
 * Accepts a route object and renders the corresponding
 * page-level component.
 */
class Application extends Component {
  static propTypes: Object = {
    dispatch: PropTypes.func.isRequired,
    initialPath: PropTypes.string.isRequired,
    manifest: PropTypes.objectOf(PropTypes.string).isRequired,
    route: PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      meta: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  };

  constructor(props: Object): void {
    super(props);
    if (isBrowser) this.initRouter();
  }

  /**
   * Initialize the router instance
   */
  initRouter: Function = (): void => {
    this.router = createRouter();
    this.router.start(this.props.initialPath, createHandler(this.props.dispatch));
  }

  render(): Element {
    const { manifest, route } = this.props;

    return (
      <BaseTemplate>
        <DefaultHeadTags manifest={manifest} />
        <pre>
          { JSON.stringify(route, null, 2) }
        </pre>
      </BaseTemplate>
    );
  }
};

export default Application;
