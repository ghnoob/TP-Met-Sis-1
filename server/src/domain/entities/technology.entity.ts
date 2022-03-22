import {
  Entity,
  PrimaryGeneratedColumn,
  Index,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import EntityInterface from '../interfaces/entity.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     Technology:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: number
 *           readOnly: true
 *           description: The technology ID.
 *           example: 1
 *         name:
 *           type: string
 *           description: The technology name.
 *           example: javascript
 */
/**
 * Represents a technology that a rate can belong to.
 */
@Entity()
export default class Technology implements EntityInterface {
  @PrimaryGeneratedColumn()
  private id?: number;

  @Index({ unique: true })
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
   * @param name Name of the technology @example C#
   */
  constructor(name: string) {
    this.name = name;
  }

  public getId() {
    return this.id;
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
