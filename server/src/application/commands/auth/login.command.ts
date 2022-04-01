import SignupCommand from './signup.command';

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginCommand:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: Email of an existing account.
 *           example: fake.email@mockdomain.com
 *         password:
 *           type: string
 *           description: Password for the account.
 *           example: ABC123def_
 */
/**
 * Data needed for logging in.
 */
export default class LoginCommand extends SignupCommand {}
