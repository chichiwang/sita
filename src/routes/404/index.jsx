/* @flow */
import React from 'react';

import type { Element } from 'react';

import RootComponent from './components';

export default {
  name: '404',
  path: '(.*)',
  action(ctx): Element<*> {
    if (ctx.koa) ctx.koa.response.status = 404;
    return <RootComponent ctx={ctx} />;
  },
};
