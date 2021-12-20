import { body, ValidationChain } from 'express-validator';
import ValidatorInterface from './validator.interface';

class UpdateRateValidator implements ValidatorInterface {
  validate(): ValidationChain[] {
    return [
      body(['averageSalary', 'grossMargin'], 'value must be a numeric string, positive, up to 2 decimal places')
        .optional()
        .isString()
        .trim()
        .matches(/^\d+(\.\d{1,2})?$/),
    ];
  }
}

export default new UpdateRateValidator();
