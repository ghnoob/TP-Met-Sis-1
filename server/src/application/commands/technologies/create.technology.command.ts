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
export default class CreateTechnologyCommand {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }
}
