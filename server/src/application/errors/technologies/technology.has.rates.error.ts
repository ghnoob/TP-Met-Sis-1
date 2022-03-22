import ApplicationError from '../application.error';

/**
 * Thrown when trying to delete a technology that has rates associated to it.
 */
export default class TechnologyHasRatesError extends ApplicationError {
  constructor() {
    super('This technology has rates associated with it. Delete them before deleting this.');

    this.name = 'TechnologyHasRatesError';
  }
}
