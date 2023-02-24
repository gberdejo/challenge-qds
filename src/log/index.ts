import winston, { LoggerOptions, format, transports } from 'winston';
import path from 'path';
import moment from 'moment';

const options: LoggerOptions = {
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple(),
        // format.timestamp(),
        format.printf(({ level, message, ...args }) => {
          return `[${moment().format('LLL')}] [${level}]: ${message} ${
            Object.keys(args).length ? `- ${JSON.stringify(args)}` : ''
          }`;
        }),
      ),
    }),
    new transports.File({
      filename: path.join(__dirname, '../../logs.log'),
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
};

export const logger = winston.createLogger(options);
