import { Service } from 'typedi';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import { Rate } from '../../../domain/entities/rate.entity';
import RateNotFoundError from '../../customErrors/rates/rate.not.found.error';
import RateRepository from '../../../infrastructure/repositories/rate.repository';
import UpdateRateCommand from '../../commands/rates/update.rate.command';

@Service()
export default class UpdateRateHandler implements HandlerInterface<Rate> {
  async execute(command: UpdateRateCommand): Promise<Rate> {
    const rate: Rate | null = await RateRepository.findOneById(command.getId());

    if (!rate) {
      throw new RateNotFoundError();
    }

    if (command.getAverageSalary()) {
      rate.setAverageSalary(command.getAverageSalary());
    }

    if (command.getGrossMargin()) {
      rate.setGrossMargin(command.getGrossMargin());
    }

    return rate;
  }
}
