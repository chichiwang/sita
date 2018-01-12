/* @flow */
import Koa from 'koa';

export default function createServer(router: Function): Object {
  const server: Object = new Koa();

  server.use(router);

  return server;
}
