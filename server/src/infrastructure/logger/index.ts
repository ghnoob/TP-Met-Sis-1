import { createLogger } from 'winston';
import loggerOptions from '../../config/logger.config';

/**
 * Winston logger.
 */
const logger = createLogger({ ...loggerOptions, level: 'info' });

export default logger;
