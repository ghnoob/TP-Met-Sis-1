import ApplicationError from '../application.error';

export default class TechnologyHasRatesError extends ApplicationError {
    constructor() {
        super('This technology has rates associated with it. Delete them before deleting this.');

        this.name = 'TechnologyHasRatesError';
    }
}
