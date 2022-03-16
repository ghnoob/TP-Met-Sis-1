import { Service } from 'typedi';
import rateRepository from '../../../infrastructure/repositories/rate.repository';
import FilterCommandRate from '../../commands/rates/filter.rates.command';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import type { Rate } from '../../../domain/entities/rate.entity';

@Service()
export default class FilterRateHandler implements HandlerInterface<Rate[]> {
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
