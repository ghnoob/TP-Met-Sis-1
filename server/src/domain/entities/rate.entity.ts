import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import CurrencyEnum from '../enums/currency.enum';
import LanguageEnum from '../enums/language.enum';
import SeniorityEnum from '../enums/seniority.enum';
import Technology from './technology.entity';

/**
 * Represents a rate.
 * @swagger
 * components:
 *   schemas:
 *     Rate:
 *       type: object
 *       required:
 *         - id
 *         - technology
 *         - seniority
 *         - language
 *         - averageSalary
 *         - grossMargin
 *         - currency
 *       properties:
 *         id:
 *           type: 1
 *           readOnly: true
 *           description: The rate ID.
 *           example: 1
 *         technology:
 *           $ref: '#/components/schemas/Technology'
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
 * Represents the average rate of a developer with certain characteristcs.
 */
@Entity()
export default class Rate {
  /**
   * Id of the rate.
   */
  @PrimaryGeneratedColumn()
  private id?: number;

  /**
   * Technology of the rate.
   */
  @ManyToOne(() => Technology, { eager: true })
  private technology: Technology;

  /**
   * Seniority level of the rate
   */
  @Column({ type: 'text' })
  private seniority: SeniorityEnum;

  /**
   * Language for the rate.
   */
  @Column({ type: 'text' })
  private language: LanguageEnum;

  /**
   * Average salary of the developers with these characteristics.
   */
  @Column({ type: 'real' })
  private averageSalary: number;

  /**
   * Gross margin taken by the community as a retribution.
   */
  @Column({ type: 'real' })
  private grossMargin: number;

  /**
   * Currency of the average salary and gross margin values.
   */
  @Column({ type: 'text' })
  private currency: CurrencyEnum;

  /**
   * Rate creation date
   */
  @CreateDateColumn()
  private createdAt?: Date;

  /**
   * Rate last update date
   */
  @UpdateDateColumn()
  private updatedAt?: Date;

  /**
   * Rate deletion date
   */
  @DeleteDateColumn({ select: false })
  private deletedAt?: Date;

  constructor(
    technology: Technology,
    seniority: SeniorityEnum,
    language: LanguageEnum,
    averageSalary: number,
    grossMargin: number,
    currency: CurrencyEnum,
  ) {
    this.technology = technology;
    this.seniority = seniority;
    this.language = language;
    this.averageSalary = averageSalary;
    this.grossMargin = grossMargin;
    this.currency = currency;
  }

  /**
   * Gets the id of the rate
   */
  public getId() {
    return this.id;
  }

  /**
   * Gets the technology of the rate
   */
  public getTechnology() {
    return this.technology;
  }

  /**
   * Sets the technology of the rate
   */
  public setTechnology(technology: Technology) {
    this.technology = technology;
  }

  /**
   * Gets the seniority level of the rate
   */
  public getSeniority() {
    return this.seniority;
  }

  /**
   * Setrs the seniority level of the rate
   */
  public setSeniority(seniority: SeniorityEnum) {
    this.seniority = seniority;
  }

  /**
   * Gets the language of the rate
   */
  public getLanguage() {
    return this.language;
  }

  /**
   * Sets the language of the rate
   */
  public setLanguage(language: LanguageEnum) {
    this.language = language;
  }

  /**
   * Gets the average salary of the rate
   */
  public getAverageSalary() {
    return this.averageSalary;
  }

  /**
   * Sets the average salary of the rate
   */
  public setAverageSalary(averageSalary: number) {
    this.averageSalary = averageSalary;
  }

  /**
   * Gets the gross margin of the rate
   */
  public getGrossMargin() {
    return this.grossMargin;
  }

  /**
   * Sets the gross margin of the rate
   */
  public setGrossMargin(grossMargin: number) {
    this.grossMargin = grossMargin;
  }

  /**
   * Gets the currency of the rate
   */
  public getCurrency() {
    return this.currency;
  }

  /**
   * Sets the currency of the rate
   */
  public setCurrency(currency: CurrencyEnum) {
    this.currency = currency;
  }

  /**
   * Gets the date when the rate was created
   */
  public getCreationDate() {
    return this.createdAt;
  }

  /**
   * Gets the date when the rate was last updated
   */
  public getUpdateDate() {
    return this.updatedAt;
  }

  /**
   * Gets the date when the rate was deleted
   */
  public getDeletionDate() {
    return this.deletedAt;
  }
}
