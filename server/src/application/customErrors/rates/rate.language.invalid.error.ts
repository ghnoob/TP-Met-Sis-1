import ApplicationError from '../application.error';
import { LanguageEnum } from '../../../domain/enums/language.enum';

export default class RateLanguageInvalidError extends ApplicationError {
    constructor() {
        super(
            'RateLanguageInvalidError',
            `Invalid language code. Allowed ${Object.values(LanguageEnum).join(', ')}.`,
            400,
        )
    }
}
