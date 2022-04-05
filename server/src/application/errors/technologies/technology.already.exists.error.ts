import ApplicationError from '../application.error';

/**
 * @swagger
 * components:
 *   responses:
 *     TechnologyAlreadyExists:
 *       description: The technology already exists
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 422
 *             name: Unproccessable Entity
 *             message: A technology with that name already exists.
 */
/**
 * Thrown when a technology is duplicated in the database.
 */
export default class TechnologyAlreadyExistsError extends ApplicationError {
  constructor() {
    super('A technology with that name already exists.');

    this.name = 'TechnologyAlreadyExistsError';
  }
}
