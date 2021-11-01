import ApplicationError from '../application.error';

export default class TechnologyNotFoundError extends ApplicationError {
    constructor() {
        super('TechnologyNotFoundError', 'No technology found with that id.', 404);
    }
}