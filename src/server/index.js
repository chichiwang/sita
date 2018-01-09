/* @flow */
import Koa from 'koa';

async function requestHandler(ctx: Object): Promise<void> {
  ctx.body = 'Hello, Sita!'; // eslint-disable-line fp/no-mutation
}

export default function createServer(): Object {
  const server: Object = new Koa();

  server.use(requestHandler);

  return server;
}
