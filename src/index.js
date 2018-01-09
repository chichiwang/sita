/* @flow */
import chalk from 'chalk';

import createServer from './server';

/*
 TODO:
  * Plug routes into router adapter
  * Feed routes and configs into server
  * Compose server
  * Start server
*/

const server = createServer();
const port = 8080;

console.log(chalk.green(`Server started at http://127.0.0.1:${port}...`));
server.listen(port);
