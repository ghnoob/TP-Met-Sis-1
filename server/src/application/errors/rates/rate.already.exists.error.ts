import ApplicationError from '../application.error';

/**
 * Thown when trying to create a rate that already exists.
 */
export default class RateAlreadyExistsError extends ApplicationError {
  constructor() {
    super('Rate already exists.');

    this.name = 'RateAlreadyExistsError';
  }
}
