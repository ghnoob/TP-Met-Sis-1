import { EntityRepository, Repository } from 'typeorm';
import User from '../../domain/entities/user.entity';

/**
 * Works with User database entities.
 */
@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  /**
   * Checks if an email is already in use.
   * @param email Email to check in the database.
   * @returns true if the given email already exists in the database.
   */
  async emailExists(email: string): Promise<boolean> {
    return Boolean(
      await this.createQueryBuilder('user').select('user.id').where('user.email = :email', { email }).getOne(),
    );
  }

  /**
   * Finds an user by its email address
   * @param email Email address to search.
   * @returns If the user was found, its `id` and `password`, else `undefined`.
   */
  findByEmail(email: string): Promise<User | undefined> {
    return this.createQueryBuilder('user')
      .select(['user.id', 'user.password'])
      .where('user.email = :email', { email })
      .getOne();
  }
}
