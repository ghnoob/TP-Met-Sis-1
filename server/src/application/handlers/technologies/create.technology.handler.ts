import { plainToInstance } from 'class-transformer';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import Technology from '../../../domain/entities/technology.entity';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';
import CreateTechnologyCommand from '../../commands/technologies/create.technology.command';
import TechnologyAlreadyExistsError from '../../errors/technologies/technology.already.exists.error';

/**
 * Handler for creating a technology.
 */
@Service()
export default class CreateTechologyHandler implements HandlerInterface<Technology> {
  constructor(
    @InjectRepository(TechnologyRepository)
    private readonly repository: TechnologyRepository,
  ) {}

  /**
   * Creates a new technology and saves it to the database.
   * @param command DTO with information to create the technology.
   * @throws {TechnologyAlreadyExistsError} A technology with the same name exists in the database.
   * @returns The created technology.
   */
  async execute(command: CreateTechnologyCommand): Promise<Technology> {
    if (await this.repository.nameExists(command.getName())) {
      throw new TechnologyAlreadyExistsError();
    }

    const technology = await this.repository.save(new Technology(command.getAuthor(), command.getName()));

    return plainToInstance(Technology, {
      id: technology.getId(),
      name: technology.getName(),
      createdAt: technology.getCreationDate(),
    });
  }
}
