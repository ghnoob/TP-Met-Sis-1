import { Service } from 'typedi';
import CreateRateCommand from '../../commands/rates/create.rate.command';
import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';
import type HandlerInterface from '../../../domain/interfaces/handler.interface';
import { Rate } from '../../../domain/entities/rate.entity';
import RateAlreadyExistsError from '../../customErrors/rates/rate.already.exists.error';
import RateRepository from '../../../infrastructure/repositories/rate.repository';
import RateTechnologyIdNotValidError from '../../customErrors/rates/rate.technology.id.not.valid.error';
import type { Technology } from '../../../domain/entities/technology.entity';

@Service()
export default class CreateRateHandler implements HandlerInterface<Rate> {
  async execute(command: CreateRateCommand): Promise<Rate> {
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

    return rate;
  }
}
