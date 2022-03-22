/**
 * Base class for application errors.
 */
export default abstract class ApplicationError extends Error {
  /**
   * Creates a new Application Error.
   * @param message Error description.
   */
  constructor(message?: string) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = 'ApplicationError';

    this.message = message || 'Something went wrong. Please try again.';
  }
}
