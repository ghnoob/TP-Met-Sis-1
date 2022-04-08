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
import EntityInterface from '../interfaces/entity.interface';
import LanguageEnum from '../enums/language.enum';
import SeniorityEnum from '../enums/seniority.enum';
import Technology from './technology.entity';
import User from './user.entity';

/**
 * Represents a rate.
 * @swagger
 * components:
 *   schemas:
 *     Rate:
 *       type: object
 *       required:
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
 *         author:
 *           $ref: '#/components/schemas/User'
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
 *           description: Currency of the rate, as a 3 letter ISO code
 *           enum:
 *             - 'ARS'
 *             - 'USD'
 *         createdAt:
 *           type: Date
 *           readOnly: true
 *           description: Creation date of the rate.
 *           example: 2022-03-21T22:31:00Z
 *         updatedAt:
 *           type: Date
 *           readOnly: true
 *           description: Creation date of the rate.
 *           example: 2022-03-21T22:31:00Z
 */
/**
 * Represents the average rate of a developer with certain characteristcs.
 */
@Entity()
export default class Rate implements EntityInterface {
  @PrimaryGeneratedColumn()
  private id?: number;

  @ManyToOne(() => User)
  private author: User;

  @ManyToOne(() => Technology)
  private technology: Technology;

  @Column({ type: 'text' })
  private seniority: SeniorityEnum;

  @Column({ type: 'text' })
  private language: LanguageEnum;

  @Column({ type: 'real' })
  private averageSalary: number;

  @Column({ type: 'real' })
  private grossMargin: number;

  @Column({ type: 'text' })
  private currency: CurrencyEnum;

  @CreateDateColumn()
  private createdAt?: Date;

  @UpdateDateColumn()
  private updatedAt?: Date;

  @DeleteDateColumn({ select: false })
  private deletedAt?: Date;

  /**
   * Creates a new rate.
   */
  constructor(
    author: User,
    technology: Technology,
    seniority: SeniorityEnum,
    language: LanguageEnum,
    averageSalary: number,
    grossMargin: number,
    currency: CurrencyEnum,
  ) {
    this.author = author;
    this.technology = technology;
    this.seniority = seniority;
    this.language = language;
    this.averageSalary = averageSalary;
    this.grossMargin = grossMargin;
    this.currency = currency;
  }

  public getId() {
    return this.id;
  }

  /**
   * Gets the user who created the rate.
   */
  public getAuthor() {
    return this.author;
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

  public getCreationDate() {
    return this.createdAt;
  }

  public getUpdateDate() {
    return this.updatedAt;
  }

  public getDeletionDate() {
    return this.deletedAt;
  }
}
