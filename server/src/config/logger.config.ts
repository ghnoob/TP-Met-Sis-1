import { Request, Response } from 'express';
import { LoggerOptions } from 'express-winston';
import winston from 'winston';
import config from '.';

/**
 * Winston config.
 */
const loggerOptions: LoggerOptions = {
  transports: [new winston.transports.Console()],
  level: (_req: Request, res: Response, err: Error): string => {
    if (err) {
      return 'error';
    }

    if (res) {
      return 'debug';
    }

    return 'info';
  },
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true }),
  ),
  meta: config.debug,
};

export default loggerOptions;
