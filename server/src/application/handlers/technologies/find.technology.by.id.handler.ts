import { Service } from 'typedi';
import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';
import TechnologyNotFoundError from '../../errors/technologies/technology.not.found.error';
import FindTechnologyByIdCommand from '../../commands/technologies/find.technology.by.id.command';
import Technology from '../../../domain/entities/technology.entity';
import HandlerInterface from '../../../domain/interfaces/handler.interface';

@Service()
export default class DeleteTechnologyHandler implements HandlerInterface<Technology> {
  async execute(command: FindTechnologyByIdCommand): Promise<Technology> {
    const technology = await TechnologyRepository.findOneById(command.getId());

    if (!technology) {
      throw new TechnologyNotFoundError();
    }

    return technology;
  }
}
