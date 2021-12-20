import { body, ValidationChain } from 'express-validator';
import { CurrencyEnum } from '../../domain/enums/currency.enum';
import { LanguageEnum } from '../../domain/enums/language.enum';
import { SeniorityEnum } from '../../domain/enums/seniority.enum';
import ValidatorInterface from './validator.interface';

class CreateRateValidator implements ValidatorInterface {
  validate(): ValidationChain[] {
    return [
      body('technology', 'value must not be empty').trim().notEmpty(),

      body('seniority', `invalid value. Allowed: ${Object.values(SeniorityEnum).join(', ')}`)
        .trim()
        .toLowerCase()
        .isIn(Object.values(SeniorityEnum)),

      body('language', `invalid value. Allowed: ${Object.values(LanguageEnum).join(', ')}`)
        .trim()
        .toLowerCase()
        .isIn(Object.values(LanguageEnum)),

      body(['averageSalary', 'grossMargin'], 'value must be a numeric string, positive, up to 2 decimal places')
        .isString()
        .trim()
        .matches(/^\d+(\.\d{1,2})?$/),

      body('currency', `invalid value. Allowed: ${Object.values(CurrencyEnum).join(', ')}`)
        .trim()
        .toUpperCase()
        .isIn(Object.values(CurrencyEnum)),
    ];
  }
}

export default new CreateRateValidator();
