import { Service } from 'typedi';
import FindRateByIdCommand from '../../commands/rates/find.rate.by.id.command';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import Rate from '../../../domain/entities/rate.entity';
import RateNotFoundError from '../../customErrors/rates/rate.not.found.error';
import rateRepository from '../../../infrastructure/repositories/rate.repository';

@Service()
export default class FindRateByIdHandler implements HandlerInterface<Rate> {
  async execute(command: FindRateByIdCommand): Promise<Rate> {
    const rate: Rate | null = await rateRepository.findOneById(command.getId());

    if (!rate) {
      throw new RateNotFoundError();
    }

    return rate;
  }
}
