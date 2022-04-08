/**
 * @swagger
 * components:
 *   schemas:
 *     SignupCommand:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - passwordConfirmation
 *       properties:
 *         email:
 *           type: string
 *           description: Email to create a new account.
 *           example: fake.email@mockdomain.com
 *         password:
 *           type: string
 *           description: Password for the new user.
 *           example: ABC123def_
 *         passwordConfirmation:
 *           type: string
 *           description: Must be equal to the password.
 *           example: ABC123def_
 */
/**
 * Data needed for singing up.
 */
export default class SignupCommand {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  /**
   * Gets the email of the command.
   */
  getEmail() {
    return this.email;
  }

  /**
   * Gets the password of the command.
   */
  getPassword() {
    return this.password;
  }
}
