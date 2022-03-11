import { Constructable, Container } from 'typedi';
import RequestLoggerService from '../services/request.logger.service';

export default function RequestLogger() {
  return function (object: Constructable<unknown>, propertyName: string, index?: number) {
    const logger = Container.get(RequestLoggerService).getInstace();
    Container.registerHandler({ object, propertyName, index, value: () => logger });
  };
}
