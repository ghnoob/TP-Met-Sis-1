import { Constructable, Container } from 'typedi';
import ErrorLoggerService from '../services/error.logger.service';

export default function ErrorLogger() {
  return function (object: Constructable<unknown>, propertyName: string, index?: number) {
    const logger = Container.get(ErrorLoggerService).getInstace();
    Container.registerHandler({ object, propertyName, index, value: () => logger });
  };
}
