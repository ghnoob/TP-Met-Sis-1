import { body, ValidationChain } from 'express-validator';

/**
 * Adds validation info to the request when a new account is created.
 */
const signupValidator: ValidationChain[] = [
  body('email', 'value must be an email').isEmail().normalizeEmail(),
  body('password', 'value must be a safe password').isStrongPassword(),
  body('passwordConfirmation').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }

    return true;
  }),
];

export default signupValidator;
