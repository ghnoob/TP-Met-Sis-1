import { body, ValidationChain } from 'express-validator';

/**
 * Sanitizes request body.
 */
const filterRateSanitizer: ValidationChain[] = [
  body(['seniority', 'language']).trim().toLowerCase(),
  body('currency').trim().toUpperCase(),
];

export default filterRateSanitizer;
