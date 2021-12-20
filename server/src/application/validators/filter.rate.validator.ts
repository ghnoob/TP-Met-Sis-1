import { body, ValidationChain } from 'express-validator';
import ValidatorInterface from './validator.interface';

class FilterRateValidator implements ValidatorInterface {
  validate(): ValidationChain[] {
    return [body(['seniority', 'language']).trim().toLowerCase(), body('currency').trim().toUpperCase()];
  }
}

export default new FilterRateValidator();
