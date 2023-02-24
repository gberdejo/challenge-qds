import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import allRoutes from './controllers';
import { logErrors, clientErrorHandler } from './utils/handlerError';

export const app: Application = express();

app.use(express.json()).use(cors()).use(morgan('dev'));

allRoutes.map((route) => app.use(route));

app.use(logErrors);

app.use(clientErrorHandler);
