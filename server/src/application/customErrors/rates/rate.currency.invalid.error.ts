import ApplicationError from '../application.error';
import { CurrencyEnum } from '../../../domain/enums/currency.enum';

export default class RateCurrencyInvalidError extends ApplicationError {
    constructor() {
        super(
            'RateCurrencyInvalidError',
            `Invalid currency code. Allowed ${Object.values(CurrencyEnum).join(', ')}.`,
            400,
        )
    }
}
