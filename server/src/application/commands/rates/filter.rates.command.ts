import SeniorityEnum from '../../../domain/enums/seniority.enum';
import LanguageEnum from '../../../domain/enums/language.enum';

/**
 * @swagger
 * components:
 *   schemas:
 *     FilterRatesCommand:
 *       type: object
 *       properties:
 *         technologies:
 *           type: array
 *           description: Array of technology ids
 *           items:
 *             type: string
 *           example:
 *             - eWRhpRV
 *         seniority:
 *           type: string
 *           description: The seniority level required for the rate
 *           example: junior
 *         language:
 *           type: string
 *           description: The language required for the rate, as a two letter ISO code
 *           example: es
 *         currency:
 *           type: string
 *           description: Currenct of the rate, as a 3 letter ISO code
 *           example: ARS
 */
/**
 * Data needed to filter rates.
 */
export default class FilterRatesCommand {
  private technologyIds?: number[];
  private seniority?: SeniorityEnum;
  private language?: LanguageEnum;
  private currency?: string;

  /**
   * Creates a command.
   * @param technologyIds Array of ids to filter the rate.
   * @param seniority Seniority of the rate.
   * @param language Language of the rate.
   * @param currency Currency of the rate.
   */
  constructor(technologyIds?: number[], seniority?: SeniorityEnum, language?: LanguageEnum, currency?: string) {
    this.technologyIds = technologyIds;
    this.seniority = seniority;
    this.language = language;
    this.currency = currency;
  }

  /**
   * Gets the technology ids property of the command.
   * @returns An array of technology ids.
   */
  public getTechnologyIds() {
    return this.technologyIds;
  }

  /**
   * Gets the seniority property of the command.
   */
  public getSeniority() {
    return this.seniority;
  }

  /**
   * Gets the language property of the command.
   */
  public getLanguage() {
    return this.language;
  }

  /**
   * Gets the currency property of the command.
   */
  public getCurrency() {
    return this.currency;
  }
}
