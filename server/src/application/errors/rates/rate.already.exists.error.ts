import ApplicationError from '../application.error';

/**
 * @swagger
 * components:
 *   responses:
 *     RateAlreadyExists:
 *       description: The rate already exists
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 422
 *             name: Unprocessable Entity
 *             message: Rate already exists.
 */
/**
 * Thown when trying to create a rate that already exists.
 */
export default class RateAlreadyExistsError extends ApplicationError {
  constructor() {
    super('Rate already exists.');

    this.name = 'RateAlreadyExistsError';
  }
}
