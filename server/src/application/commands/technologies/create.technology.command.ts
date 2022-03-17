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
  private name: string;

  /**
   * Creates a command.
   * @param name Name of the technology.
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Gets the name property of the command.
   */
  public getName() {
    return this.name;
  }
}
