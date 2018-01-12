/* @flow */
import UniversalRouter from 'universal-router';

type RouteMiddleware = {
  action: Function,
};

type Route = {
  path: String,
  action: Function,
};

export default function createRouter(
  routes: Route[] = [],
  middleware: RouteMiddleware[] = [],
): Function {
  const routerInstance: Object = new UniversalRouter([...routes, ...middleware]);

  return async function router(ctx: Object): Promise<void> {
    const pathname: String = ctx.request.url;
    const resp: String = await routerInstance.resolve({ pathname, koa: ctx });
    ctx.body = resp;
  };
}
