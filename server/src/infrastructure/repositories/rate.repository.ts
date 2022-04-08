import { EntityRepository, Repository } from 'typeorm';
import Rate from '../../domain/entities/rate.entity';
import CurrencyEnum from '../../domain/enums/currency.enum';
import LanguageEnum from '../../domain/enums/language.enum';
import SeniorityEnum from '../../domain/enums/seniority.enum';

/**
 * Manages database Rate entities
 */
@EntityRepository(Rate)
export default class RateRepository extends Repository<Rate> {
  /**
   * Returns all rates
   */
  findAll(): Promise<Rate[]> {
    return this.createQueryBuilder('rate')
      .leftJoinAndSelect('rate.technology', 'technology')
      .leftJoinAndSelect('rate.author', 'author')
      .select([
        'rate.id',
        'author.id',
        'author.email',
        'technology.id',
        'technology.name',
        'rate.seniority',
        'rate.language',
        'rate.averageSalary',
        'rate.grossMargin',
        'rate.currency',
      ])
      .getMany();
  }

  /**
   * Finds and retuns the rate with the given id.
   */
  findOneById(id: number): Promise<Rate | undefined> {
    return this.createQueryBuilder('rate')
      .leftJoinAndSelect('rate.technology', 'technology')
      .leftJoinAndSelect('rate.author', 'author')
      .select([
        'rate.id',
        'author.id',
        'author.email',
        'technology.id',
        'technology.name',
        'rate.seniority',
        'rate.language',
        'rate.averageSalary',
        'rate.grossMargin',
        'rate.currency',
        'rate.createdAt',
        'rate.updatedAt',
      ])
      .where('rate.id = :id', { id })
      .getOne();
  }

  /**
   * Returns all rates that match the filters.
   * @param technologyIds IDs of the technologies that the rates can have.
   * @param seniority Seniority level the rates that the rates can have.
   * @param language Language that the rates can have.
   * @param currency Currency that the rates can have
   */
  filter(
    technologyIds?: number[],
    seniority?: SeniorityEnum,
    language?: LanguageEnum,
    currency?: string,
  ): Promise<Rate[]> {
    const query = this.createQueryBuilder('rate')
      .leftJoinAndSelect('rate.technology', 'technology')
      .leftJoinAndSelect('rate.author', 'author')
      .select([
        'rate.id',
        'author.id',
        'author.email',
        'technology.id',
        'technology.name',
        'rate.seniority',
        'rate.language',
        'rate.averageSalary',
        'rate.grossMargin',
        'rate.currency',
      ]);

    if (technologyIds) {
      query.where('rate.technologyId IN :technologyIds', { technologyIds });
    }

    const filters = new Map<string, unknown>([
      ['seniority', seniority],
      ['language', language],
      ['currency', currency],
    ]);

    filters.forEach((key, value) => {
      if (value) {
        query.andWhere(`rate.${key} = :value`, { value });
      }
    });

    return query.getMany();
  }

  /**
   * Returns true if a rate with the given properties exists.
   */
  async exists(
    technologyId: number,
    seniority: SeniorityEnum,
    language: LanguageEnum,
    currency: CurrencyEnum,
  ): Promise<boolean> {
    const query = this.createQueryBuilder('rate')
      .select('id')
      .where('rate.technologyId = :technologyId', { technologyId })
      .andWhere('rate.seniority = :seniority', { seniority })
      .andWhere('rate.language = :language', { language })
      .andWhere('rate.currency = :currency', { currency });

    return Boolean(await query.getOne());
  }

  /**
   * Returns true if a rate with the given id exists.
   */
  async idExists(id: number) {
    return Boolean(await this.createQueryBuilder('rate').select('rate.id').where('rate.id = :id', { id }).getOne());
  }
}
