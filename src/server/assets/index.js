/* @flow */
import path from 'path';
import Koa from 'koa';
import KoaStatic from 'koa-static';
import chalk from 'chalk';

import config from './config';

const app = new Koa();
const { port } = config;

app.use(KoaStatic(path.join(__dirname, '../../../assets')));
app.listen(port);

// eslint-disable-next-line no-console
console.log(chalk.green(`Assets server started at http://127.0.0.1:${port}...`));
