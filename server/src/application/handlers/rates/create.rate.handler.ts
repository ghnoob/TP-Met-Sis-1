import { Rate } from '../../../domain/entities/rate.entity';
import RateRepository from '../../../infrastructure/repositories/rate.repository';
import CreateRateCommand from '../../commands/rates/create.rate.command';
import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';
import { Technology } from '../../../domain/entities/technology.entity';
import RateAlreadyExistsError from '../../customErrors/rates/rate.already.exists.error';
import RateTechnologyIdNotValidError from '../../customErrors/rates/rate.technology.id.not.valid.error';

class CreateRateHandler {
  async execute(command: CreateRateCommand) {
    const technology: Technology | null = await TechnologyRepository.findOneById(command.getTechnology());

    if (!technology) {
      throw new RateTechnologyIdNotValidError();
    }

    const existsRate = await RateRepository.exists(
      command.getTechnology(),
      command.getSeniority(),
      command.getLanguage(),
      command.getCurrency(),
    );

    if (existsRate) {
      throw new RateAlreadyExistsError();
    }

    const rate: Rate = new Rate(
      technology,
      command.getSeniority(),
      command.getLanguage(),
      command.getAverageSalary(),
      command.getGrossMargin(),
      command.getCurrency(),
    );

    await RateRepository.save(rate);
  }
}
export default new CreateRateHandler();
