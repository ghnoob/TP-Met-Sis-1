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
export default class UpdateTechnologyCommand extends CreateTechnologyCommand {
  private id: string;

  constructor(id: string, name: string) {
    super(name);
    this.id = id;
  }

  public getId() {
    return this.id;
  }
}
