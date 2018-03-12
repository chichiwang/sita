/* @flow */
import React from 'react';
import PropTypes from 'prop-types';

function BaseTemplate({ children }) {
  return (
    <div id="page-root">
      { children }
    </div>
  );
}

BaseTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default BaseTemplate;
