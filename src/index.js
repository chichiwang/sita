import Koa from 'koa';
import chalk from 'chalk';

const server = new Koa();

server.use(async function catchAll(ctx) {
  ctx.body = 'Hello Koa!';
});

const msgServerStart = chalk.green.bgBlack('[sita] Server starting on port 3000...');
console.log(msgServerStart);
server.listen(3000);
