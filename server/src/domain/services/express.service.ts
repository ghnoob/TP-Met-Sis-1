import express from 'express';
import cors from 'cors';
import { serve, setup } from 'swagger-ui-express';
import { Container, InjectMany, Service } from 'typedi';
import CommonRoutes from '../../http/routes/common.routes';
import errorHandler from '../../http/middlewares/error.handler.middleware';
import logger from '../../infrastructure/logger';
import { requestLogger, errorLogger } from '../../http/middlewares/logger.middleware';
import AuthRoutes from '../../http/routes/auth.routes';
import RateRoutes from '../../http/routes/rate.routes';
import TechnologyRoutes from '../../http/routes/technology.routes';
import swagger from '../../config/swagger.config';

/**
 * Creates a Express server as an injectable service.
 */
@Service()
export default class ExpressService {
  private readonly app: express.Application;

  constructor(@InjectMany('routes') private readonly routes: CommonRoutes[]) {
    Container.import([TechnologyRoutes, RateRoutes, AuthRoutes]);

    this.app = express();

    this.app.use(requestLogger);

    this.app.use(cors());
    this.app.use(express.json());

    this.routes.forEach((route: CommonRoutes) => {
      this.app.use(route.getName(), route.getRouter());
      logger.info(`Routes configured for ${route.getName()}`);
    });

    this.app.use('/api', serve, setup(swagger));

    this.app.use(errorLogger);

    this.app.use(errorHandler);
  }

  listen(port: number) {
    this.app.listen(port, () => {
      logger.info(`Server listening on port ${port}`);
    });
  }
}
