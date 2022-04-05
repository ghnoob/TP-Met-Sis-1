import { ValidationError as ValError } from 'express-validator';
import ApplicationError from '../application.error';

/**
 * @swagger
 * components:
 *   responses:
 *     TechnologyValidationError:
 *       description: Validation error
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 400
 *             name: Bad Request
 *             message:
 *               - value: ''
 *                 message: value must not be empty
 *                 param: name
 *                 location: body
 */
/**
 * Thown when a vlaidation error occurs.
 */
export default class ValidationError extends ApplicationError {
  constructor(errors: ValError[]) {
    super(errors);

    this.name = 'ValidationError';
  }
}
