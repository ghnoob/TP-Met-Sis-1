import SeniorityEnum from '../../../domain/enums/seniority.enum';
import LanguageEnum from '../../../domain/enums/language.enum';
import CurrencyEnum from '../../../domain/enums/currency.enum';
import User from '../../../domain/entities/user.entity';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateRateCommand:
 *       type: object
 *       required:
 *         - technologyId
 *         - seniority
 *         - language
 *         - averageSalary
 *         - grossMargin
 *         - currency
 *       properties:
 *         technologyId:
 *           type: number
 *           description: The id of the associated technology
 *           example: 1
 *         seniority:
 *           type: string
 *           description: The seniority level required for the rate
 *           enum:
 *             - 'junior'
 *             - 'semi senior'
 *             - 'senior'
 *         language:
 *           type: string
 *           description: The language required for the rate, as a two letter ISO code
 *           enum:
 *             - 'en'
 *             - 'es'
 *         averageSalary:
 *           type: number
 *           description: Average salary of the devs with this rate
 *           example: 75000
 *         grossMargin:
 *           type: number
 *           description: Gross margin taken as a retribution to the community. Usually it's 1% of the salary
 *           example: 750
 *         currency:
 *           type: string
 *           description: Currenct of the rate, as a 3 letter ISO code
 *           enum:
 *             - 'ARS'
 *             - 'USD'
 */
/**
 * Data needed to create a rate.
 */
export default class CreateRateCommand {
  private technologyId: number;
  private author: User;
  private seniority: SeniorityEnum;
  private language: LanguageEnum;
  private averageSalary: number;
  private grossMargin: number;
  private currency: CurrencyEnum;

  /**
   * Creates a command.
   * @param author User who crates the rate.
   * @param technologyId Id of the rate.
   * @param seniority Seniority of the rate.
   * @param language Language of the rate.
   * @param averageSalary Average salary of the rate.
   * @param grossMargin Gross margin of the rate.
   * @param currency Currency of the rate.
   */
  constructor(
    author: User,
    technologyId: number,
    seniority: SeniorityEnum,
    language: LanguageEnum,
    averageSalary: number,
    grossMargin: number,
    currency: CurrencyEnum,
  ) {
    this.author = author;
    this.technologyId = technologyId;
    this.seniority = seniority;
    this.language = language;
    this.averageSalary = averageSalary;
    this.grossMargin = grossMargin;
    this.currency = currency;
  }

  /**
   * Gets the user who creates the rate
   */
  public getAuthor() {
    return this.author;
  }

  /**
   * Gets the technology id attribute of the command.
   */
  public getTechnologyId() {
    return this.technologyId;
  }

  /**
   * Gets the seniority attribute of the command.
   */
  public getSeniority() {
    return this.seniority;
  }

  /**
   * Gets the language attribute of the command.
   */
  public getLanguage() {
    return this.language;
  }

  /**
   * Gets the averageSalary attribute of the command.
   */
  public getAverageSalary() {
    return this.averageSalary;
  }

  /**
   * Gets the grossMargin attribute of the command.
   */
  public getGrossMargin() {
    return this.grossMargin;
  }

  /**
   * Gets the currency attribute of the command.
   */
  public getCurrency() {
    return this.currency;
  }
}
