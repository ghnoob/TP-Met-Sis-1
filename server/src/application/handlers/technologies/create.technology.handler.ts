import { Technology } from '../../../domain/entities/technology.entity';
import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';
import CreateTechnologyCommand from '../../commands/technologies/create.technology.command';
import TechnologyAlreadyExistsError from '../../customErrors/technologies/technology.already.exists.error';

class CreateTechologyHandler {
  async execute(command: CreateTechnologyCommand): Promise<Technology> {
    if (await TechnologyRepository.findOneByName(command.getName())) {
      throw new TechnologyAlreadyExistsError();
    }

    const technology: Technology = new Technology(command.getName());

    await TechnologyRepository.save(technology);

    return technology;
  }
}
export default new CreateTechologyHandler();
