import { Service } from 'typedi';
import { logger } from 'express-winston';
import loggerOptions from '../../config/logger.config';
import BaseLogger from '../logger/base.logger';

@Service()
export default class RequestLoggerService extends BaseLogger {
  constructor() {
    super(logger(loggerOptions));
  }
}
