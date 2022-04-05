import 'reflect-metadata';
import { config } from 'dotenv';
import { Container } from 'typedi';
import { createConnection, useContainer } from 'typeorm';
import ExpressService from './domain/services/express.service';
import logger from './infrastructure/logger';

config();

useContainer(Container);

createConnection()
  .then(() => {
    logger.info('Database connected');
  })
  .catch(error => {
    logger.error("Couldn't connect to the database");
    logger.error(error.message);
  })
  .finally(() => {
    const app = Container.get(ExpressService);
    app.listen(Number(process.env.SERVER_PORT ?? 3000));
  });
