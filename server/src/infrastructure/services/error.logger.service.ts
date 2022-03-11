import { Service } from 'typedi';
import { errorLogger } from 'express-winston';
import loggerOptions from '../../config/logger.config';
import BaseLogger from '../logger/base.logger';

@Service()
export default class ErrorLoggerService extends BaseLogger {
  constructor() {
    super(errorLogger(loggerOptions));
  }
}
