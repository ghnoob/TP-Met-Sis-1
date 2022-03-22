import ApplicationError from '../application.error';

/**
 * Thrown when trying to find a technology that does not exist.
 */
export default class TechnologyNotFoundError extends ApplicationError {
  constructor() {
    super('No technology found with that id.');

    this.name = 'TechnologyNotFoundError';
  }
}
