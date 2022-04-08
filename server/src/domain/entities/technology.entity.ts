import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import EntityInterface from '../interfaces/entity.interface';
import User from './user.entity';

/**
 * @swagger
 * components:
 *   schemas:
 *     Technology:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: number
 *           readOnly: true
 *           description: The technology ID.
 *           example: 1
 *         author:
 *           $ref: '#/components/schemas/User'
 *         name:
 *           type: string
 *           description: The technology name.
 *           example: javascript
 *         createdAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Creation date of the technology.
 *           example: 2022-03-21T22:31:00Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Creation date of the technology.
 *           example: 2022-03-21T22:31:00Z
 */
/**
 * Represents a technology that a rate can belong to.
 */
@Entity()
export default class Technology implements EntityInterface {
  @PrimaryGeneratedColumn()
  private id?: number;

  @ManyToOne(() => User)
  private author: User;

  @Column()
  private name: string;

  @CreateDateColumn()
  private createdAt?: Date;

  @UpdateDateColumn()
  private updatedAt?: Date;

  @DeleteDateColumn({ select: false })
  private deletedAt?: Date;

  /**
   * Creates a new technology.
   * @param author User who creates the technology.
   * @param name Name of the technology @example C#
   */
  constructor(author: User, name: string) {
    this.author = author;
    this.name = name;
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
   * Gets the name of the technology.
   */
  public getName() {
    return this.name;
  }

  /**
   * Sets the name of the technology.
   */
  public setName(name: string) {
    this.name = name;
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
