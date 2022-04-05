import ApplicationError from '../application.error';

/**
 * @swagger
 * components:
 *   responses:
 *     TechnologyNotFound:
 *       description: 'Technology not found'
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 404
 *             name: Not Found
 *             message: Technology not found.
 */
/**
 * Thrown when trying to find a technology that does not exist.
 */
export default class TechnologyNotFoundError extends ApplicationError {
  constructor() {
    super('No technology found with that id.');

    this.name = 'TechnologyNotFoundError';
  }
}
