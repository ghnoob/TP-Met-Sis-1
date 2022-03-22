import { body, ValidationChain } from 'express-validator';

/**
 * Adds validation info to the request when a technology is created.
 */
const createTechnologyValidator: ValidationChain[] = [
  body('name', 'value must not be empty').trim().toLowerCase().notEmpty(),
];

export default createTechnologyValidator;
