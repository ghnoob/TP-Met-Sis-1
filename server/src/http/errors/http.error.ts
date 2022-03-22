import { STATUS_CODES } from 'http';

/**
 * @swagger
 * components:
 *   schemas:
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         statusCode:
 *           type: integer
 *           description: response status code
 *           default: 500
 *           readOnly: true
 *         name:
 *           type: string
 *           description: short error description
 *           default: Internal Server Error
 *           readonly: true
 *         message:
 *           oneOf:
 *             - type: string
 *             - type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: any
 *                     description: submitted value
 *                     example: 'abc123'
 *                   msg:
 *                     type: string
 *                     description: error message
 *                     example: The value must be a number.
 *                   param:
 *                     type: string
 *                     description: parameter name
 *                     example: quantity
 *                   location:
 *                     type: string
 *                     description: location of the error
 *                     enum: [body, query, params, cookies, headers]
 *                     example: body
 *           description: error detailed description
 *           default: An error ocurred. Please try again.
 *           readOnly: true
 */
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
