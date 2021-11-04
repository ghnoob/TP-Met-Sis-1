import ApplicationError from '../application.error';

export default class RateInvalidMoneyValueError extends ApplicationError {
    constructor() {
        super(
            'RateInvalidMoneyValueError',
            `Money values must be numeric strings.`,
            400,
        )
    }
}
