/* @flow */
import UniversalRouter from 'universal-router';
import ReactDomServer from 'react-dom/server';

import routes from '../routes/server';
import template from './template';

const routerInstance: Object = new UniversalRouter(routes);

export default async function router(ctx: Object): Promise<void> {
  const pathname: String = ctx.request.url;
  const resp: String = await routerInstance.resolve({ pathname, koa: ctx });
  ctx.body = template(ReactDomServer.renderToString(resp));
};
