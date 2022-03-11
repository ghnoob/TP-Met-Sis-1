import express from 'express';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import { Container, InjectMany, Service } from 'typedi';
import CommonRoutes from '../../http/routes/common.routes';
import errorHandler from '../../http/errors/errorHandler';
import logger from '../logger';
import { requestLogger, errorLogger } from '../middlewares/logger.middleware';
import TechnologyRoutes from '../../http/routes/technology.routes';
import RateRoutes from '../../http/routes/rate.routes';

@Service()
export default class ExpressService {
  private readonly app: express.Application;

  constructor(@InjectMany('routes') private readonly routes: CommonRoutes[]) {
    Container.import([TechnologyRoutes, RateRoutes]);

    this.app = express();

    this.app.use(requestLogger);

    this.app.use(cors());
    this.app.use(express.json());

    this.routes.forEach((route: CommonRoutes) => {
      this.app.use(route.getName(), route.getRouter());
      logger.info(`Routes configured for ${route.getName()}`);
    });

    const options: swaggerJSDoc.Options = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'Dev salary calculator',
          description: 'Trabajo final para la materia Metodología de Sistemas I - UTN San Francisco.',
          version: '1.0.0',
          servers: ['http://localhost:3000'],
        },
      },
      apis: [
        `${__dirname}/http/routes/*.routes.ts`,
        `${__dirname}/domain/entities/*.entity.ts`,
        `${__dirname}/application/commands/**/*.command.ts`,
        `${__dirname}/http/errors/errorHandler.ts`,
      ],
    };

    const swaggerSpec = swaggerJSDoc(options);

    this.app.use('/api', serve, setup(swaggerSpec));

    this.app.use(errorLogger);

    this.app.use(errorHandler);
  }

  listen(port: number) {
    this.app.listen(port, () => {
      logger.info('Server listening on port 3000');
    });
  }
}