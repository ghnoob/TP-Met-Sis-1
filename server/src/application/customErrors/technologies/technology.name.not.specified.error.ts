import ApplicationError from '../application.error';

export default class TechnologyNameNotSpecifiedError extends ApplicationError {
    constructor() {
        super(
            'TechnologyNameNotSpecifiedError',
            'A technology name must be specified in the request body.',
            400,
        );
    }
}