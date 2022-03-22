/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateRateCommand:
 *       type: object
 *       properties:
 *         averageSalary:
 *           type: number
 *           description: Average salary of the devs with this rate.
 *           example: 75000
 *         grossMargin:
 *           type: number
 *           description: Gross margin taken as a retribution to the community. Usually it's 1% of the salary
 *           example: 750
 */
/**
 * Data needed to update a rate.
 */
export default class UpdateRateCommand {
  private id: number;
  private averageSalary: number;
  private grossMargin: number;

  /**
   * Creates a command.
   * @param id Id of the rate.
   * @param averageSalary New average salary of the rate.
   * @param grossMargin New gross margin of the rate.
   */
  constructor(id: number, averageSalary: number, grossMargin: number) {
    this.id = id;
    this.averageSalary = averageSalary;
    this.grossMargin = grossMargin;
  }

  /**
   * Gets the id property of the command.
   */
  public getId() {
    return this.id;
  }

  /**
   * Gets the averageSalary property of the command.
   */
  public getAverageSalary() {
    return this.averageSalary;
  }

  /**
   * Gets the grossMargin property of the command.
   */
  public getGrossMargin() {
    return this.grossMargin;
  }
}
