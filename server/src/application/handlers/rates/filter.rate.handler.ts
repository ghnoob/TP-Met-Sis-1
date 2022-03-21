import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import RateRepository from '../../../infrastructure/repositories/rate.repository';
import FilterRateCommand from '../../commands/rates/filter.rates.command';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import Rate from '../../../domain/entities/rate.entity';

/**
 * Handler for filtering rates.
 */
@Service()
export default class FilterRateHandler implements HandlerInterface<Rate[]> {
  constructor(
    @InjectRepository(RateRepository)
    private readonly repository: RateRepository,
  ) {}

  /**
   * Filters rates according to the given filters.
   * @param command DTO with filter parameters.
   * @returns Array of filtered rates.
   */
  execute(command: FilterRateCommand): Promise<Rate[]> {
    return this.repository.filter(
      command.getTechnologyIds(),
      command.getSeniority(),
      command.getLanguage(),
      command.getCurrency(),
    );
  }
}
