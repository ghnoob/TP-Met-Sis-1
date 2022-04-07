import ApplicationError from '../application.error';

/**
 * @swagger
 * components:
 *   responses:
 *     UserNotFound:
 *       description: The requested user was not found in the database.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 404
 *             name: Not Found
 *             message: User not found.
 *     JwtUserNotFound:
 *       description: Ther provided authorization token is valid but it does not correspond to an existing user, likely because it was deleted.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 404
 *             name: Not Found
 *             message: User not found.
 */
/**
 * Thrown when trying to access a resource with an user that does not exisr.
 */
export default class UserNotFoundError extends ApplicationError {
  constructor() {
    super('User not found.');

    this.name = 'UserNotFound';
  }
}
