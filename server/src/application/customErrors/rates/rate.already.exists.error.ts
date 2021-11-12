import ApplicationError from '../application.error';

export default class RateAlreadyExistsError extends ApplicationError {
    constructor() {
        super('Rate already exists.');

        this.name = 'RateAlreadyExistsError';
    }
}
