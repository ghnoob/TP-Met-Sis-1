import ApplicationError from '../application.error';

/**
 * Thrown when trying to find a rate that does not exist.
 */
export default class RateNotFoundError extends ApplicationError {
  constructor() {
    super('No rate found with that id.');

    this.name = 'RateNotFoundError';
  }
}
