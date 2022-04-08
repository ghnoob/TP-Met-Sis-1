import User from '../../../domain/entities/user.entity';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateTechnologyCommand:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The technology name. Converted to lowercase.
 *           example: javascript
 */
/**
 * Data to create a technology.
 */
export default class CreateTechnologyCommand {
  private author: User;
  private name: string;

  /**
   * Creates a command.
   * @param author User who creates the technology.
   * @param name Name of the technology.
   */
  constructor(author: User, name: string) {
    this.author = author;
    this.name = name;
  }

  /**
   * Gets the user who is creating the technology.
   */
  public getAuthor() {
    return this.author;
  }

  /**
   * Gets the name property of the command.
   */
  public getName() {
    return this.name;
  }
}
