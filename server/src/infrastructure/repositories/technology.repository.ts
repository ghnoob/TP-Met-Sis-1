import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import RateRepository from './rate.repository';
import Technology from '../../domain/entities/technology.entity';

/**
 * Works with Technology database entities.
 */
@EntityRepository(Technology)
export default class TechnologyRepository extends Repository<Technology> {
  /**
   * Returns true if a technology with the given name exists.
   * @param name Name of the technology
   */
  async nameExists(name: string): Promise<boolean> {
    return Boolean(
      await this.createQueryBuilder('technology')
        .select('technology.id')
        .where('technology.name = :name', { name })
        .getOne(),
    );
  }

  /**
   * Returns true if at least one rate exists that is associated with the given technology id.
   * @param id Id of the technology
   */
  async idExists(id: number): Promise<boolean> {
    return Boolean(
      await this.createQueryBuilder('technology').select('technology.id').where('technology.id = :id', { id }).getOne(),
    );
  }

  /**
   * Returns true if a technology has associated rates.
   * @param id Id of the technology
   */
  async hasRates(id: number): Promise<boolean> {
    const ratesRepository = getCustomRepository(RateRepository);

    const query = ratesRepository
      .createQueryBuilder('rate')
      .select('rate.id')
      .loadAllRelationIds()
      .where('rate.technology.id = :id', { id });

    return Boolean(await query.getOne());
  }
}
