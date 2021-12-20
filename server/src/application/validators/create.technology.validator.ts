import { body, ValidationChain } from 'express-validator';
import ValidatorInterface from './validator.interface';

class CreateTechnologyValidator implements ValidatorInterface {
  validate(): ValidationChain[] {
    return [body('name', 'value must not be empty').trim().toLowerCase().notEmpty()];
  }
}

export default new CreateTechnologyValidator();
