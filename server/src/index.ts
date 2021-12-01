import express from 'express';
import cors from 'cors';
import { log } from 'debug';
import expressWinston from 'express-winston';
import winston from 'winston';
import swaggerJSDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import CommonRoutes from './http/routes/common.routes';
import RateRoutes from './http/routes/rate.routes';
import TechnologyRoutes from './http/routes/technology.routes';
import errorHandler from './http/errors/errorHandler';

const app: express.Application = express();

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true }),
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

app.use(expressWinston.logger(loggerOptions));

const routes: Array<CommonRoutes> = [];
app.use(cors());
app.use(express.json());

routes.push(new RateRoutes(app), new TechnologyRoutes(app));

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

app.use('/api', serve, setup(swaggerSpec));

app.use(errorHandler);

app.listen(3000, () => {
  routes.forEach((route: CommonRoutes) => {
    log(`Routes configured for ${route.getName()}`);
  });
  log('Server listening on port 3000');
});
