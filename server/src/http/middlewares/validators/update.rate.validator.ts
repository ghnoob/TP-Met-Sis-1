import { body, ValidationChain } from 'express-validator';
import isNumber from './isnumber.validator';

/**
 * Adds validation info to the request when a rate is updated.
 */
const updateRateValidator: ValidationChain[] = [
  body(['averageSalary', 'grossMargin'])
    .optional()
    .custom(value => isNumber(value, { min: 0 })),
];

export default updateRateValidator;
