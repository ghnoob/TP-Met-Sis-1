import { SeniorityEnum } from '../../../domain/enums/seniority.enum';
import { LanguageEnum } from '../../../domain/enums/language.enum';
import { CurrencyEnum } from '../../../domain/enums/currency.enum';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateRateCommand:
 *       type: object
 *       required:
 *         - technology
 *         - seniority
 *         - language
 *         - averageSalary
 *         - grossMargin
 *         - currency
 *       properties:
 *         technology:
 *           type: string
 *           description: The id of the associated technology
 *           example: eWRhpRV
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
 *           type: string
 *           description: Average salary of the devs with this rate, as a numeric string
 *           example: '75000'
 *         grossMargin:
 *           type: string
 *           description: Gross margin taken as a retribution to the community. Usually it's 1% of the salary
 *           example: '750'
 *         currency:
 *           type: string
 *           description: Currenct of the rate, as a 3 letter ISO code
 *           enum:
 *             - 'ARS'
 *             - 'USD'
 */
export default class CreateRateCommand {
  private technology: string;
  private seniority: SeniorityEnum;
  private language: LanguageEnum;
  private averageSalary: string;
  private grossMargin: string;
  private currency: CurrencyEnum;

  constructor(
    technology: string,
    seniority: SeniorityEnum,
    language: LanguageEnum,
    averageSalary: string,
    grossMargin: string,
    currency: CurrencyEnum,
  ) {
    this.technology = technology;
    this.seniority = seniority;
    this.language = language;
    this.averageSalary = averageSalary?.toString() ?? '0';
    this.grossMargin = grossMargin?.toString() ?? '0';
    this.currency = currency;
  }

  public getTechnology() {
    return this.technology;
  }

  public getSeniority() {
    return this.seniority;
  }

  public getLanguage() {
    return this.language;
  }

  public getAverageSalary() {
    return this.averageSalary;
  }

  public getGrossMargin() {
    return this.grossMargin;
  }

  public getCurrency() {
    return this.currency;
  }
}
