/* @flow */
import Koa from 'koa';
import chalk from 'chalk';

export default function start(): void {
  const server: Object = new Koa();

  server.use(async function catchAll(ctx: Object): Promise<void> {
    ctx.body = 'Hello Koa!'; // eslint-disable-line fp/no-mutation
  });

  const msgServerStart: string = chalk.green.bgBlack(
    '[sita] Server starting at http://127.0.0.1:3000...',
  );
  console.log(msgServerStart); // eslint-disable-line no-console
  server.listen(3000);
}
