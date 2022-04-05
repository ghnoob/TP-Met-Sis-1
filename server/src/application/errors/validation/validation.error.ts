import { ValidationError as ValError } from 'express-validator';
import ApplicationError from '../application.error';

/**
 * Thown when a vlaidation error occurs.
 */
export default class ValidationError extends ApplicationError {
  constructor(errors: ValError[]) {
    super(errors);

    this.name = 'ValidationError';
  }
}
