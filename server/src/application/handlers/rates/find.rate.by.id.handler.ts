import FindRateByIdCommand from '../../commands/rates/find.rate.by.id.command';
import type HandlerInterface from '../../../domain/interfaces/handler.interface';
import type { Rate } from '../../../domain/entities/rate.entity';
import RateNotFoundError from '../../customErrors/rates/rate.not.found.error';
import rateRepository from '../../../infrastructure/repositories/rate.repository';

class FindRateByIdHandler implements HandlerInterface<Rate> {
  async execute(command: FindRateByIdCommand): Promise<Rate> {
    const rate: Rate | null = await rateRepository.findOneById(command.getId());

    if (!rate) {
      throw new RateNotFoundError();
    }

    return rate;
  }
}

export default new FindRateByIdHandler();
