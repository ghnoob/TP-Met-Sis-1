import ApplicationError from '../application.error';
import { SeniorityEnum } from '../../../domain/enums/seniority.enum';

export default class RateSeniorityInvalidError extends ApplicationError {
    constructor() {
        super(
            'RateSeniorityInvalidError',
            `Invalid seniority code. Allowed ${Object.values(SeniorityEnum).join(', ')}.`,
            400,
        )
    }
}
