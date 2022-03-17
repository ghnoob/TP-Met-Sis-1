import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import FindTechnologyByIdCommand from '../../commands/technologies/find.technology.by.id.command';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import Technology from '../../../domain/entities/technology.entity';
import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';
import TechnologyNotFoundError from '../../errors/technologies/technology.not.found.error';

/**
 * Handler for finding a technology by its id.
 */
@Service()
export default class FindTechnologyByIdHandler implements HandlerInterface<Technology> {
  constructor(
    @InjectRepository(TechnologyRepository)
    private readonly repository: TechnologyRepository,
  ) {}

  /**
   * Gets a technology from the database.
   * @param command DTO with information to find the technnology
   * @throws {TechnologyNotFoundError} The technology was not found in the database.
   * @returns The found technology.
   */
  async execute(command: FindTechnologyByIdCommand): Promise<Technology> {
    const technology = await this.repository.findOne(command.getId());

    if (!technology) {
      throw new TechnologyNotFoundError();
    }

    return technology;
  }
}
