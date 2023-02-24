import { Response, Request, NextFunction } from 'express';
import { logger } from '../log/index';

export const logErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.error(`[${err.name}: ${err.message}]`);
  logger.error(err.stack);
  next(err);
};

export const clientErrorHandler = (err: Error, req: Request, res: Response) => {
  res.status(500);
  res.json({ error: 'Something failed!' });
};
