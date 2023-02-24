import { Request, Response, Router } from 'express';
import Joi from 'joi';

import { joiValidation } from '../utils/validation';
import { logger } from '../log/index';

const router = Router();

export default router.post(
  '/rotateMatriz',
  joiValidation(
    Joi.object({
      matriz: Joi.array().items(
        Joi.array().min(2).items(Joi.number().required()),
      ),
    }),
  ),
  (req: Request, res: Response) => {
    logger.info('body', req.body);

    const { matriz }: { matriz: number[][] } = req.body;

    const response = matriz[0].map((value, index) =>
      matriz.map((row) => row[row.length - 1 - index]),
    );

    logger.info('response', response);
    res.status(200).json(response);
  },
);
