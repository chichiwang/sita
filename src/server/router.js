/* @flow */
import ReactDomServer from 'react-dom/server';

import createRouter from 'router';
import template from './template';

export default async function router(ctx: Object): Promise<void> {
  const pathname: String = ctx.request.url;
  const router = createRouter();

  router.start(pathname, function routeHandler(err, state) {
    console.log('err >>', err);
    console.log('state >>', state);
    ctx.body = 'Hello, Sita!';
  });
  // const resp: String = await routerInstance.resolve({ pathname, koa: ctx });
  // ctx.body = template(ReactDomServer.renderToString(resp));
};
