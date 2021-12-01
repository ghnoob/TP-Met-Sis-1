/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateRateCommand:
 *       type: object
 *       properties:
 *         averageSalary:
 *           type: string
 *           description: Average salary of the devs with this rate, as a numeric string
 *           example: '75000'
 *         grossMargin:
 *           type: string
 *           description: Gross margin taken as a retribution to the community. Usually it's 1% of the salary
 *           example: '750'
 */
export default class UpdateRateCommand {
  private id: string;
  private averageSalary: string;
  private grossMargin: string;

  constructor(id: string, averageSalary: string, grossMargin: string) {
    this.id = id;
    this.averageSalary = averageSalary;
    this.grossMargin = grossMargin;
  }

  public getId() {
    return this.id;
  }

  public getAverageSalary() {
    return this.averageSalary;
  }

  public getGrossMargin() {
    return this.grossMargin;
  }
}
