import { ValidationChain } from 'express-validator';

export default interface ValidatorInterface {
  validate(): ValidationChain[];
}
