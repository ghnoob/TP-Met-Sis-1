import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import ValidationError from '../../application/errors/validation/validation.error';

/**
 * Middleware for validating request body.
 */
export default function validate(req: Request, _res: Response, next: NextFunction): void {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return next(new ValidationError(errors.array()));
}
