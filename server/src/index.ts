import 'reflect-metadata';
import { config } from 'dotenv';
import { Container } from 'typedi';
import { createConnection, useContainer } from 'typeorm';
import Application from './config/application';
import logger from './infrastructure/logger';

config();

useContainer(Container);

createConnection()
  .then(() => {
    logger.info('Database connected');

    Container.get(Application).bootstrap();
  })
  .catch(error => {
    logger.error("Couldn't connect to the database");
    logger.error(error.message);
  });
