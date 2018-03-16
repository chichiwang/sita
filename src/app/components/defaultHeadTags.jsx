/* @flow */
import React from 'react';
import Helmet from 'react-helmet';

import config from 'app/config';

/**
 * Set the default head tags based on the config.
 * Sets the title, HTML `lang` attribute.
 */
export default function DefaultHeadTags() {
  return (
    <Helmet>
      <title>{config.title}</title>
      <html lang={config.lang} />
    </Helmet>
  );
}
