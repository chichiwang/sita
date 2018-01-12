/* @flow */
import chalk from 'chalk';

import createServer from './server';
import createRouter from './router';
import routes from './routes/server';

const router: Object = createRouter(routes);
const server: Object = createServer(router);
const port: Number = 8080;

// eslint-disable-next-line no-console
console.log(chalk.green(`Server started at http://127.0.0.1:${port}...`));
server.listen(port);
