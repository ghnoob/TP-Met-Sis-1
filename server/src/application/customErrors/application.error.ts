export default abstract class ApplicationError extends Error {
    public status: number;

    constructor(name?: string, message?: string, status?: number) {
      super();

      Error.captureStackTrace(this, this.constructor);

      this.name = name || "ApplicationError";

      this.message = message || 'Something went wrong. Please try again.';

      this.status = status || 500;
  }
}
