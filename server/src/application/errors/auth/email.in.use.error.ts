import ApplicationError from '../application.error';

/**
 * Thown when trying to create a rate that already exists.
 */
export default class EmailInUseError extends ApplicationError {
  constructor() {
    super('This email is already registered with another account.');

    this.name = 'EmailInUseError';
  }
}
