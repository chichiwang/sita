/* @flow */
import Koa from 'koa';
import chalk from 'chalk';

const server: Object = new Koa();

server.use(async function catchAll(ctx) {
  ctx.body = 'Hello Koa!'; // eslint-disable-line fp/no-mutation
});

const msgServerStart: string = chalk.green.bgBlack(
  '[sita] Server starting on port 3000...',
);
console.log(msgServerStart); // eslint-disable-line no-console
server.listen(3000);
