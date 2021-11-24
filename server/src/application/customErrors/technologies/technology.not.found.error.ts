import ApplicationError from '../application.error';

export default class TechnologyNotFoundError extends ApplicationError {
  constructor() {
    super('No technology found with that id.');

    this.name = 'TechnologyNotFoundError';
  }
}
