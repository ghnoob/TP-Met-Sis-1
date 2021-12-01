import { SeniorityEnum } from '../../../domain/enums/seniority.enum';
import { LanguageEnum } from '../../../domain/enums/language.enum';

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
export default class FilterRatesCommand {
  private technologies?: string[];
  private seniority?: SeniorityEnum;
  private language?: LanguageEnum;
  private currency?: string;

  constructor(technologies?: string[], seniority?: SeniorityEnum, language?: LanguageEnum, currency?: string) {
    this.technologies = technologies;
    this.seniority = seniority;
    this.language = language;
    this.currency = currency;
  }

  public getTechnologies() {
    return this.technologies;
  }

  public getSeniority() {
    return this.seniority;
  }

  public getLanguage() {
    return this.language;
  }

  public getCurrency() {
    return this.currency;
  }
}
