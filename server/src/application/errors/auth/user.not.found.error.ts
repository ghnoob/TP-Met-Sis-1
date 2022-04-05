import ApplicationError from '../application.error';

/**
 * Thrown when trying to access a resource with an user that does not exisr.
 */
export default class UserNotFoundError extends ApplicationError {
  constructor() {
    super('User not found.');

    this.name = 'UserNotFound';
  }
}
