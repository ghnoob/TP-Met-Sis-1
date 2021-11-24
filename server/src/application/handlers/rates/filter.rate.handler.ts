import rateRepository from '../../../infrastructure/repositories/rate.repository';
import FilterCommandRate from '../../commands/rates/filter.rates.command';
import type { Rate } from '../../../domain/entities/rate.entity';

class FilterRateHandler {
  async execute(command: FilterCommandRate): Promise<Rate[]> {
    const filteredRates: Rate[] = await rateRepository.findAllBy(
      command.getTechnologies(),
      command.getSeniority(),
      command.getLanguage(),
      command.getCurrency(),
    );

    return filteredRates;
  }
}

export default new FilterRateHandler();
