/* @flow */
import chalk from 'chalk';
import Koa from 'koa';

import { app as config } from 'server/config';
import router from './router';

const server: Object = new Koa();
const { port } = config;

server.use(router);

export default function startAppServer() {
  // eslint-disable-next-line no-console
  console.log(chalk.green(`Server started at http://127.0.0.1:${port}...`));
  server.listen(port);
}
