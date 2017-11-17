import Koa from 'koa';
import chalk from 'chalk';

const server = new Koa();

server.use(async function catchAll(ctx) {
  ctx.body = 'Hello Koa!'; // eslint-disable-line fp/no-mutation
});

const msgServerStart = chalk.green.bgBlack('[sita] Server starting on port 3000...');
console.log(msgServerStart); // eslint-disable-line no-console
server.listen(3000);
