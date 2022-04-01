import ApplicationError from '../application.error';

/**
 * Thown when trying to login with a wrong password.
 */
export default class WrongPasswordError extends ApplicationError {
  constructor() {
    super('Incorrect password.');

    this.name = 'WrongPasswordError';
  }
}
