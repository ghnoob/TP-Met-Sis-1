import rateRepository from '../../../infrastructure/repositories/rate.repository';
import type { Rate } from '../../../domain/entities/rate.entity';
import FindRateByIdCommand from '../../commands/rates/find.rate.by.id.command';
import RateNotFoundError from '../../customErrors/rates/rate.not.found.error';

class FindRateByIdHandler {
  async execute(command: FindRateByIdCommand): Promise<Rate> {
    const rate: Rate | null = await rateRepository.findOneById(command.getId());

    if (!rate) {
      throw new RateNotFoundError();
    }

    return rate;
  }
}

export default new FindRateByIdHandler();
