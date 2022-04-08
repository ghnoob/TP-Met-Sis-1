import { body, ValidationChain } from 'express-validator';
import CurrencyEnum from '../../../domain/enums/currency.enum';
import isNumber from './isnumber.validator';
import LanguageEnum from '../../../domain/enums/language.enum';
import SeniorityEnum from '../../../domain/enums/seniority.enum';

/**
 * Adds validation info to the request when a rate is created.
 */
const createRateValidator: ValidationChain[] = [
  body('technologyId', 'value must not be empty').trim().notEmpty(),

  body('seniority', `invalid value. Allowed: ${Object.values(SeniorityEnum).join(', ')}`)
    .trim()
    .toLowerCase()
    .isIn(Object.values(SeniorityEnum)),

  body('language', `invalid value. Allowed: ${Object.values(LanguageEnum).join(', ')}`)
    .trim()
    .toLowerCase()
    .isIn(Object.values(LanguageEnum)),

  body(['averageSalary', 'grossMargin']).custom(value => isNumber(value, { min: 0 })),

  body('currency', `invalid value. Allowed: ${Object.values(CurrencyEnum).join(', ')}`)
    .trim()
    .toUpperCase()
    .isIn(Object.values(CurrencyEnum)),
];

export default createRateValidator;
