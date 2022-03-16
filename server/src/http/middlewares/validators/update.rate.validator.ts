import { body, ValidationChain } from 'express-validator';

const updateRateValidator: ValidationChain[] = [
  body(['averageSalary', 'grossMargin'], 'value must be a numeric string, positive, up to 2 decimal places')
    .optional()
    .isString()
    .trim()
    .matches(/^\d+(\.\d{1,2})?$/),
];

export default updateRateValidator;
