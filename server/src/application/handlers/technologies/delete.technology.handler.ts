import { Service } from 'typedi';
import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';
import RateRepository from '../../../infrastructure/repositories/rate.repository';
import DeleteTechnologyCommand from '../../commands/technologies/delete.technology.command';
import TechnologyNotFoundError from '../../customErrors/technologies/technology.not.found.error';
import TechnologyHasRatesError from '../../customErrors/technologies/technology.has.rates.error';
import HandlerInterface from '../../../domain/interfaces/handler.interface';

@Service()
export default class DeleteTechnologyHandler implements HandlerInterface<void> {
  async execute(command: DeleteTechnologyCommand): Promise<void> {
    const technology = await TechnologyRepository.findOneById(command.getId());

    if (!technology) {
      throw new TechnologyNotFoundError();
    }

    if (await RateRepository.technologyHasRates(technology)) {
      throw new TechnologyHasRatesError();
    }

    await TechnologyRepository.deleteById(technology.getId());
  }
}
