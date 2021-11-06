export default abstract class ApplicationError extends Error {
    constructor(name?: string, message?: string) {
      super();

      Error.captureStackTrace(this, this.constructor);

      this.name = name || "ApplicationError";

      this.message = message || 'Something went wrong. Please try again.';
  }
}
