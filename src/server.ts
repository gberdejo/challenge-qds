import { app } from './app';
import { get } from './config';
import { connectionDb } from './utils/database';
import { logger } from './log/index';

export const server = app.listen(get('port'), () => {
  logger.info(`App listening on the port ${get('port')}`);
  logger.info('database host', process.env.MONGO_URI);
});

connectionDb()
  .then(() => logger.info(`¡Database connected!`))
  .catch((err) => {
    logger.error(err);
    server.close();
  });
