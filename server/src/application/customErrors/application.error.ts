export default abstract class ApplicationError extends Error {
  constructor(message?: string) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = 'ApplicationError';

    this.message = message || 'Something went wrong. Please try again.';
  }
}
