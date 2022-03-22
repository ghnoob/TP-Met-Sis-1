import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import HttpError from '../errors/http.error';

/**
 * Middleware for validating request body.
 */
export default function validate(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const message = errors.array();

  const statusCode = 400;

  return res.status(statusCode).json(new HttpError(statusCode, message));
}
