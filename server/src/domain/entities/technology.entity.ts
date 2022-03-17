import {
  Entity,
  PrimaryGeneratedColumn,
  Index,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

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
export default class Technology {
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

  constructor(name: string) {
    this.name = name;
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

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
