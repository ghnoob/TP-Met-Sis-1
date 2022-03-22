import { ErrorRequestHandler } from 'express';
import HttpError from '../errors/http.error';
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
 *         name:
 *           type: string
 *           description: short error description
 *           default: Internal Server Error
 *           readonly: true
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
 *           description: error detailed description
 *           default: An error ocurred. Please try again.
 *           readOnly: true
 */
/**
 * Middleware for handling application errors.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof Error) {
    const statusCode: number = statusCodeMap.get(err.name) ?? StatusCodes.InternalServerError;

    return res.status(statusCode).json(new HttpError(statusCode, err.message));
  }

  return res.status(StatusCodes.InternalServerError).json(new HttpError(StatusCodes.InternalServerError));
};

export default errorHandler;
