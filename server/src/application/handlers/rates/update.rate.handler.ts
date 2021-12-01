import RateRepository from '../../../infrastructure/repositories/rate.repository';
import UpdateRateCommand from '../../commands/rates/update.rate.command';
import RateNotFoundError from '../../customErrors/rates/rate.not.found.error';
import { Rate } from '../../../domain/entities/rate.entity';

class UpdateRateHandler {
  async execute(command: UpdateRateCommand): Promise<Rate> {
    const rate: Rate | null = await RateRepository.findOneById(command.getId());

    if (!rate) {
      throw new RateNotFoundError();
    }

    rate.setAverageSalary(command.getAverageSalary());
    rate.setGrossMargin(command.getGrossMargin());

    return rate;
  }
}
export default new UpdateRateHandler();
