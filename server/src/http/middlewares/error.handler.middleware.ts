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
  ['ValidationError', StatusCodes.BadRequest],
  ['SyntaxError', StatusCodes.BadRequest],
  ['EmailInUseError', StatusCodes.Conflict],
  ['EmailNotFoundError', StatusCodes.BadRequest],
  ['WrongPasswordError', StatusCodes.Unauthorized],
  ['JsonWebTokenError', StatusCodes.Unauthorized],
  ['UserNotFoundError', StatusCodes.NotFound],
]);

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
