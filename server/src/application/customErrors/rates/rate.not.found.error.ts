import ApplicationError from '../application.error';

export default class RateNotFoundError extends ApplicationError {
    constructor() {
        super('No rate found with that id.');

        this.name = 'RateNotFoundError';
    }
}
