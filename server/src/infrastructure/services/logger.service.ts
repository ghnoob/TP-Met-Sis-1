import { Service } from 'typedi';
import { createLogger } from 'winston';
import loggerOptions from '../../config/logger.config';
import BaseLogger from '../logger/base.logger';

@Service()
export default class LoggerService extends BaseLogger {
  constructor() {
    super(createLogger({ ...loggerOptions, level: 'info' }));
  }
}
