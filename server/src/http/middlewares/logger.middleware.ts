import { logger, errorLogger as errLogger } from 'express-winston';
import loggerOptions from '../../config/logger.config';

export const requestLogger = logger(loggerOptions);

export const errorLogger = errLogger(loggerOptions);
