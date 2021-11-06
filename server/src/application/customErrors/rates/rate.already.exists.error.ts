import ApplicationError from '../application.error';

export default class RateAlreadyExistsError extends ApplicationError {
    constructor() {
        super('RateAlreadyExistsError', 'Rate already exists.');
    }
}
