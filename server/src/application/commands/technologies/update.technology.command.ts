/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateTechnologyCommand:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The technology name. Converted to lowercase.
 *           example: javascript
 */
/**
 * Data needed to update a technology.
 */
export default class UpdateTechnologyCommand {
  private id: number;
  private name: string;

  /**
   * Creates a command.
   * @param id Id of the technology.
   * @param name New name of the technology.
   */
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  /**
   * Gets the id property of the command
   */
  public getId() {
    return this.id;
  }

  /**
   * Gets the name property of the command
   */
  public getName() {
    return this.name;
  }
}
