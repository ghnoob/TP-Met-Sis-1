import ApplicationError from '../application.error';

/**
 * @swagger
 * components:
 *   responses:
 *     EmailNotFound:
 *       description: Incorrect email.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 400
 *             name: Bad Request
 *             message: Incorrect email.
 */
/**
 * Thown when trying to login with an email that does not exist in the db.
 */
export default class EmailNotFoundError extends ApplicationError {
  constructor() {
    super('Incorrect email.');

    this.name = 'EmailNotFoundError';
  }
}
