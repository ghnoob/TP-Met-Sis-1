import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import FindRateByIdCommand from '../../commands/rates/find.rate.by.id.command';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import Rate from '../../../domain/entities/rate.entity';
import RateNotFoundError from '../../errors/rates/rate.not.found.error';
import RateRepository from '../../../infrastructure/repositories/rate.repository';

/**
 * Handler for finding a rate by id.
 */
@Service()
export default class FindRateByIdHandler implements HandlerInterface<Rate> {
  constructor(
    @InjectRepository(RateRepository)
    private readonly repository: RateRepository,
  ) {}

  /**
   * Finds a rate by id.
   * @param command DTO with information to find the rate.
   * @throws {RateNotFoundError} The rate was not found in the database.
   * @returns The rate found in the database.
   */
  async execute(command: FindRateByIdCommand): Promise<Rate> {
    const rate = await this.repository.findOneById(command.getId());

    if (!rate) {
      throw new RateNotFoundError();
    }

    return rate;
  }
}
