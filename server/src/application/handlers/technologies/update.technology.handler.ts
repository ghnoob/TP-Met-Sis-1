import { Service } from 'typedi';
import { Technology } from '../../../domain/entities/technology.entity';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';
import UpdateTechnologyCommand from '../../commands/technologies/update.technology.command';
import TechnologyAlreadyExistsError from '../../customErrors/technologies/technology.already.exists.error';
import TechnologyNotFoundError from '../../customErrors/technologies/technology.not.found.error';

@Service()
export default class UpdateTechnologyHandler implements HandlerInterface<Technology> {
  async execute(command: UpdateTechnologyCommand): Promise<Technology> {
    const technology: Technology | null = await TechnologyRepository.findOneById(command.getId());

    if (!technology) {
      throw new TechnologyNotFoundError();
    }

    if (await TechnologyRepository.findOneByName(command.getName())) {
      throw new TechnologyAlreadyExistsError();
    }

    if (command.getName()) {
      technology.setName(command.getName());
    }

    return technology;
  }
}
