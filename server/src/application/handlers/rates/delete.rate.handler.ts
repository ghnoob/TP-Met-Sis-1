import { Service } from 'typedi';
import DeleteRateCommand from '../../commands/rates/delete.rate.command';
import type HandlerInterface from '../../../domain/interfaces/handler.interface';
import RateRepository from '../../../infrastructure/repositories/rate.repository';
import RateNotFoundError from '../../customErrors/rates/rate.not.found.error';

@Service()
export default class DeleteRateHandler implements HandlerInterface<void> {
  async execute(command: DeleteRateCommand) {
    const rate = await RateRepository.findOneById(command.getId());

    if (!rate) {
      throw new RateNotFoundError();
    }

    await RateRepository.deleteById(rate.getId());
  }
}
