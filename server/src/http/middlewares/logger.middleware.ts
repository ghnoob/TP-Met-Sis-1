import { logger, errorLogger as errLogger } from 'express-winston';
import loggerOptions from '../../config/logger.config';

/**
 * Middleware for logging HTTP requests.
 */
export const requestLogger = logger(loggerOptions);

/**
 * Middleware for logging errors.
 */
export const errorLogger = errLogger(loggerOptions);
