import ApplicationError from '../application.error';

/**
 * @swagger
 * components:
 *   responses:
 *     TechnologyHasRates:
 *       description: The technology cannot be deleted bacause there are rates associated with it
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 422
 *             name: Unproccessable Entity
 *             message: This technology has rates associated with it. Delete them before deleting this.
 */
/**
 * Thrown when trying to delete a technology that has rates associated to it.
 */
export default class TechnologyHasRatesError extends ApplicationError {
  constructor() {
    super('This technology has rates associated with it. Delete them before deleting this.');

    this.name = 'TechnologyHasRatesError';
  }
}
