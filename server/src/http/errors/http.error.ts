import { STATUS_CODES } from 'http';

/**
 * Represents an HTTP error with status code and description.
 */
export default class HttpError extends Error {
  /**
   * HTTP status code.
   */
  public readonly statusCode: number;

  /**
   * Creates a new HTTP error.
   * @param statusCode Error's status code. @default 500
   * @param message Error description. @default ''
   */
  constructor(statusCode = 500, message: unknown = '') {
    super();

    this.message = message as string;
    this.statusCode = statusCode;
    this.name = STATUS_CODES[statusCode] ?? 'Unknown error';

    Error.captureStackTrace(this, this.constructor);
  }
}
