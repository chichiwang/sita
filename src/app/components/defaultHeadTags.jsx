/* @flow */
import React from 'react';
import Helmet from 'react-helmet';

import config from 'app/config';

export default function DefaultHeadTags() {
  return (
    <Helmet>
      <title>{config.title}</title>
      <html lang={config.lang} />
    </Helmet>
  );
}
