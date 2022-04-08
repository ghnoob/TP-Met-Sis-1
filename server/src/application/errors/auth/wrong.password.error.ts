import ApplicationError from '../application.error';

/**
 * @swagger
 * components:
 *   responses:
 *     WrongPassword:
 *       description: Incorrect password.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 401
 *             name: Unauthorized
 *             message: Incorrect password.
 */
/**
 * Thown when trying to login with a wrong password.
 */
export default class WrongPasswordError extends ApplicationError {
  constructor() {
    super('Incorrect password.');

    this.name = 'WrongPasswordError';
  }
}
