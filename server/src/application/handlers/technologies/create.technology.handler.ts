import { Service } from 'typedi';
import Technology from '../../../domain/entities/technology.entity';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';
import CreateTechnologyCommand from '../../commands/technologies/create.technology.command';
import TechnologyAlreadyExistsError from '../../errors/technologies/technology.already.exists.error';

@Service()
export default class CreateTechologyHandler implements HandlerInterface<Technology> {
  async execute(command: CreateTechnologyCommand): Promise<Technology> {
    if (await TechnologyRepository.findOneByName(command.getName())) {
      throw new TechnologyAlreadyExistsError();
    }

    const technology: Technology = new Technology(command.getName());

    await TechnologyRepository.save(technology);

    return technology;
  }
}
