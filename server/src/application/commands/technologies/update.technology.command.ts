import CreateTechnologyCommand from './create.technology.command';

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
export default class UpdateTechnologyCommand extends CreateTechnologyCommand {
  private id: number;

  /**
   * Creates a command.
   * @param id Id of the technology.
   * @param name New name of the technology.
   */
  constructor(id: number, name: string) {
    super(name);
    this.id = id;
  }

  /**
   * Gets the id property of the command
   */
  public getId() {
    return this.id;
  }
}
