import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';
import { logger } from '../log/index';

export const joiValidation = (schema: ObjectSchema) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(request.body);
      next();
    } catch (error) {
      logger.error(error);
      response.status(400).json(error);
    }
  };
};
