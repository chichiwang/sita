/* @flow */
import chalk from 'chalk';

import createServer from './create';
import router from './router';

const server: Object = createServer(router);
const port: Number = 8080;

// eslint-disable-next-line no-console
console.log(chalk.green(`Server started at http://127.0.0.1:${port}...`));
server.listen(port);
