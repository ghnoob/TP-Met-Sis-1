import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { StatusCodes } from '../../domain/enums/status.codes.enum';

/**
 * Maps application errors to HTTP status codes.
 */
const statusCodeMap = new Map<string, number>([
  ['ApplicationError', StatusCodes.InternalServerError],
  ['RateAlreadyExistsError', StatusCodes.UnproccessableEntity],
  ['RateNotFoundError', StatusCodes.NotFound],
  ['RateTechnologyIdNotValidError', StatusCodes.BadRequest],
  ['TechnologyAlreadyExistsError', StatusCodes.UnproccessableEntity],
  ['TechnologyNotFoundError', StatusCodes.NotFound],
  ['TechnologyHasRatesError', StatusCodes.UnproccessableEntity],
  ['SyntaxError', StatusCodes.BadRequest],
  ['Error', StatusCodes.BadRequest], // validation error
]);

/**
 * @swagger
 * components:
 *   schemas:
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         statusCode:
 *           type: integer
 *           description: response status code
 *           default: 500
 *           readOnly: true
 *         message:
 *           oneOf:
 *             - type: string
 *             - type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: any
 *                     description: submitted value
 *                     example: 'abc123'
 *                   msg:
 *                     type: string
 *                     description: error message
 *                     example: The value must be a number.
 *                   param:
 *                     type: string
 *                     description: parameter name
 *                     example: quantity
 *                   location:
 *                     type: string
 *                     description: location of the error
 *                     enum: [body, query, params, cookies, headers]
 *                     example: body
 *           description: error description
 *           default: An error ocurred. Please try again.
 *           readOnly: true
 */

// eslint-disable-next-line
const errorHandler: ErrorRequestHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode: number = statusCodeMap.get(err.name) ?? StatusCodes.InternalServerError;

  // los errores de validacion tiene errors y los demas message
  return res.status(statusCode).json({ statusCode, message: err.errors ?? err.message });
};

export default errorHandler;
