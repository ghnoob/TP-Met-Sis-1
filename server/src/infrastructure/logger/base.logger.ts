import { ErrorRequestHandler, RequestHandler } from 'express';
import { Logger } from 'winston';

export default class BaseLogger {
  constructor(private logger: Logger | RequestHandler | ErrorRequestHandler) {}

  getInstace() {
    return this.logger;
  }
}
