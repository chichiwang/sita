/* @flow */
import React from 'react';
import ReactDomServer from 'react-dom/server';

import store from 'store';
import Application from 'app';
import createRouter from 'app/router';
import template from './template';

export default async function router(ctx: Object): Promise<void> {
  const pathname: String = ctx.request.url;
  const routerInstance = createRouter();

  // routerInstance.start(pathname, function routeHandler(err, state) {
  //   console.log('err >>', err);
  //   console.log('state >>', state);
  //   ctx.body = 'Hello, Sita!';
  // });

  routerInstance.start(pathname, function routeHandler(err, state) {
    if (err) {
      console.log('err >>', err);
      console.log('state >>', state);
      ctx.body = 'Error!';
    } else {
      console.log('state >>', state);
      store.dispatch({
        type: 'ROUTE:CHANGE',
        payload: state,
      });

      ctx.body = template(ReactDomServer.renderToString(<Application />));
    }
  });

  // const resp: String = await routerInstance.resolve({ pathname, koa: ctx });
  // ctx.body = template(ReactDomServer.renderToString(resp));
};
