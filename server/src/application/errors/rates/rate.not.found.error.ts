import ApplicationError from '../application.error';

/**
 * @swagger
 * components:
 *   responses:
 *     RateNotFound:
 *       description: 'Rate not found'
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 404
 *             name: Not Found
 *             message: Rate not found.
 */
/**
 * Thrown when trying to find a rate that does not exist.
 */
export default class RateNotFoundError extends ApplicationError {
  constructor() {
    super('No rate found with that id.');

    this.name = 'RateNotFoundError';
  }
}
