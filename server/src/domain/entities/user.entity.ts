import { compare, hash } from 'bcrypt';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import EntityInterface from '../interfaces/entity.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           description: The user ID.
 *           readonly: true
 *           type: number
 *           example: 1
 *         email:
 *           description: The account's email.
 *           type: string
 *           format: email
 *           example: abc@mockdomain.com
 *         createdAt:
 *           description: The date when the user was created.
 *           type: string
 *           format: date-time
 *           example: 2022-01-01T00:00:00Z
 *           readonly: true
 *         updatedAt:
 *           description: The date when the user information was last updated.
 *           type: string
 *           format: date-time
 *           example: 2022-01-01T00:00:00Z
 *       required:
 *         - id
 *         - email
 *         - createdAt
 */
/**
 * Represents an user of the application
 */
@Entity()
export default class User implements EntityInterface {
  @PrimaryGeneratedColumn()
  private id?: number;

  @Column()
  private email: string;

  @Column({ select: false })
  private password: string;

  @CreateDateColumn()
  private createdAt?: Date;

  @UpdateDateColumn()
  private updatedAt?: Date;

  @DeleteDateColumn({ select: false })
  private deletedAt?: Date;

  /**
   * Creates a new user.
   */
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  getId() {
    return this.id;
  }

  /**
   * Gets the email of the account.
   */
  getEmail() {
    return this.email;
  }

  getCreationDate() {
    return this.createdAt;
  }

  getUpdateDate() {
    return this.updatedAt;
  }

  getDeletionDate() {
    return this.deletedAt;
  }

  /**
   * Checks if a plain text password corresponds to the hashed password in the database.
   * @param password Plain text password.
   * @returns true if the password is correct.
   */
  isPasswordValid(password: string): Promise<boolean> {
    return compare(password, this.password);
  }

  /**
   * Encrypts a plain text password before saving it to the database.
   */
  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
