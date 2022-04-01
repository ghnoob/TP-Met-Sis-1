import ApplicationError from '../application.error';

/**
 * Thown when trying to login with an email that does not exist in the db.
 */
export default class EmailNotFoundError extends ApplicationError {
  constructor() {
    super('Incorrect email.');

    this.name = 'EmailNotFoundError';
  }
}
