import ApplicationError from '../application.error';

export default class TechnologyAlreadyExistsError extends ApplicationError {
    constructor() {
        super('A technology with that name already exists.');

        this.name = 'TechnologyAlreadyExistsError';
    }
}