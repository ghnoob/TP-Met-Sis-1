import ApplicationError from '../application.error';

export default class RateNotFoundError extends ApplicationError {
    constructor() {
        super('RateNotFoundError', 'No rate found with that id.', 404);
    }
}
