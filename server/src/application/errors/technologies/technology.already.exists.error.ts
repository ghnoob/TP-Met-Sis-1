import ApplicationError from '../application.error';

/**
 * Thrown when a technology is duplicated in the database.
 */
export default class TechnologyAlreadyExistsError extends ApplicationError {
  constructor() {
    super('A technology with that name already exists.');

    this.name = 'TechnologyAlreadyExistsError';
  }
}
