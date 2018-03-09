/* @flow */
import chalk from 'chalk';
import Koa from 'koa';

import config from './config';
import router from './router';

const server: Object = new Koa();
const { port } = config;

server.use(router);

// eslint-disable-next-line no-console
console.log(chalk.green(`App server started at http://127.0.0.1:${port}...`));
server.listen(port);
