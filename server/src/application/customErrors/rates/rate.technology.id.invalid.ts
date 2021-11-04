import ApplicationError from '../application.error';

export default class RateTechnologyIdInvalid extends ApplicationError {
    constructor() {
        super(
            'RateTechnologyIdInvalid',
            'The id of an existent technology must be provided in the request body.',
            400,
        );
    }
}
