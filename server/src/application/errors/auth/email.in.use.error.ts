import ApplicationError from '../application.error';

/**
 * @swagger
 * components:
 *   responses:
 *     EmailInUse:
 *       description: The provided email is aldeady being user by another account
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 400
 *             name: Bad Request
 *             message: This email is already registered with another account.
 */
/**
 * Thown when trying to create a rate that already exists.
 */
/**
 * Thown when trying to create a rate that already exists.
 */
export default class EmailInUseError extends ApplicationError {
  constructor() {
    super('This email is already registered with another account.');

    this.name = 'EmailInUseError';
  }
}
