import glob from 'glob';
import path from 'path';
import { logger } from '../log/index';

const routes: string[] = glob.sync(path.join(__dirname, '/**/*controller.ts'));

const controllers = routes.map((route) => {
  logger.info(`Loading controller -> ${route.split('controllers').pop()}`);
  return require(route).default; // eslint-disable-line
});

export default controllers;
