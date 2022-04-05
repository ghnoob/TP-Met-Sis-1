import { ValidationError } from 'express-validator';

/**
 * Base class for application errors.
 */
export default abstract class ApplicationError extends Error {
  /**
   * Creates a new Application Error.
   * @param message Error description.
   */
  constructor(message?: string | ValidationError[]) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = 'ApplicationError';

    this.message = <string>message ?? 'Something went wrong. Please try again.';
  }
}
