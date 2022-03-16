import { body, ValidationChain } from 'express-validator';

const createTechnologyValidator: ValidationChain[] = [
  body('name', 'value must not be empty').trim().toLowerCase().notEmpty(),
];

export default createTechnologyValidator;
