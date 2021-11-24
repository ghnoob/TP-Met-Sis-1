import RateRepository from '../../../infrastructure/repositories/rate.repository';
import UpdateRateCommand from '../../commands/rates/update.rate.command';
import RateNotFoundError from '../../customErrors/rates/rate.not.found.error';

class UpdateRateHandler {
  async execute(command: UpdateRateCommand) {
    const rate = await RateRepository.findOneById(command.getId());

    if (!rate) {
      throw new RateNotFoundError();
    }

    rate.setAverageSalary(command.getAverageSalary());
    rate.setGrossMargin(command.getGrossMargin());
  }
}
export default new UpdateRateHandler();
