import ApplicationError from '../application.error';

export default class RateTechnologyIdNotValidError extends ApplicationError {
    constructor() {
        super(
            'RateTechnologyIdNotValidError',
            'The id of an existent technology must be provided in the request body.',
        );
    }
}
