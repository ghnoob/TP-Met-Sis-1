import ApplicationError from '../application.error';

export default class TechnologyAlreadyExistsError extends ApplicationError {
    constructor() {
        super('TechnologyAlreadyExistsError', 'A technology with that name already exists.', 400);
    }
}