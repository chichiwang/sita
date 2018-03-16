/* @flow */
import path from 'path';
import Koa from 'koa';
import KoaStatic from 'koa-static';
import KoaProxy from 'koa-proxy';
import chalk from 'chalk';

import config from './config';

const app = new Koa();
const { port } = config;
const assetsDir = path.join(__dirname, '../../../assets');

const webpackDevServerHost = 'http://127.0.0.1:8080';
const proxyRouter = KoaProxy({ host: webpackDevServerHost });

/**
 * Wrapper around KoaStatic to delegate to
 * the next Koa middleware if file not found
 */
async function assetsRouter(ctx, next) {
  await KoaStatic(assetsDir)(ctx, next);
  if (ctx.body === undefined) await next();
}

app.use(assetsRouter);
app.use(proxyRouter);
app.listen(port);

// eslint-disable-next-line no-console
console.log(chalk.green(`Assets server started at http://127.0.0.1:${port}...`));
