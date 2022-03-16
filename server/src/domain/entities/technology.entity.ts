import shortid from 'shortid';

/**
 * @swagger
 * components:
 *   schemas:
 *     Technology:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           readOnly: true
 *           description: The technology ID.
 *           example: eWRhpRV
 *         name:
 *           type: string
 *           description: The technology name.
 *           example: javascript
 */
export default class Technology {
  private id: string;
  private name: string;

  constructor(name: string) {
    this.id = shortid.generate();
    this.name = name;
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }
}
