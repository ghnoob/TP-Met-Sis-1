import ApplicationError from '../application.error';

export default class RateTechnologyIdNotValidError extends ApplicationError {
  constructor() {
    super('The id of an existent technology must be provided in the request body.');

    this.name = 'RateTechnologyIdNotValidError';
  }
}
