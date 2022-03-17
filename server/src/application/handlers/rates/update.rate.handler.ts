import { plainToInstance } from 'class-transformer';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import Rate from '../../../domain/entities/rate.entity';
import RateNotFoundError from '../../errors/rates/rate.not.found.error';
import RateRepository from '../../../infrastructure/repositories/rate.repository';
import UpdateRateCommand from '../../commands/rates/update.rate.command';

/**
 * Handler for updating a rate.
 */
@Service()
export default class UpdateRateHandler implements HandlerInterface<Rate> {
  constructor(
    @InjectRepository(RateRepository)
    private readonly repository: RateRepository,
  ) {}

  /**
   * Updates a rate in the database.
   * @param command DTO with information to update the rate.
   * @throws {RateNotFoundError} The rate was not found in the database.
   * @returns The updated rate.
   */
  async execute(command: UpdateRateCommand): Promise<Rate> {
    const rate = await this.repository.findOne(command.getId());

    if (!rate) {
      throw new RateNotFoundError();
    }

    this.repository.merge(rate, command);

    const updated = await this.repository.save(rate);

    return plainToInstance(Rate, {
      id: updated.getId(),
      updatedAt: updated.getUpdateDate(),
    });
  }
}
