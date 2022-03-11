import swaggerJSDoc from 'swagger-jsdoc';

const swagger = swaggerJSDoc({
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
});

export default swagger;
