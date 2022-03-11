import { Constructable, Container } from 'typedi';
import LoggerService from '../services/logger.service';

export default function Logger() {
  return function (object: Constructable<unknown>, propertyName: string, index?: number) {
    const logger = Container.get(LoggerService).getInstace();
    Container.registerHandler({ object, propertyName, index, value: () => logger });
  };
}
