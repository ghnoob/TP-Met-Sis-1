import { plainToInstance } from 'class-transformer';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import Technology from '../../../domain/entities/technology.entity';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';
import UpdateTechnologyCommand from '../../commands/technologies/update.technology.command';
import TechnologyAlreadyExistsError from '../../errors/technologies/technology.already.exists.error';
import TechnologyNotFoundError from '../../errors/technologies/technology.not.found.error';

/**
 * Handler for updating a technology.
 */
@Service()
export default class UpdateTechnologyHandler implements HandlerInterface<Technology> {
  constructor(
    @InjectRepository(TechnologyRepository)
    private readonly repository: TechnologyRepository,
  ) {}

  /**
   * Updates technology from the database.
   * @param command DTO with information to update the technology.
   * @throws {TechnologyNotFoundError} The technology was not found in the database.
   * @throws {TechnologyAlreadyExistsError} A technology with the same name exists in the database.
   * @returns The created technology.
   */
  async execute(command: UpdateTechnologyCommand): Promise<Technology> {
    const technology = await this.repository.findOne(command.getId());

    if (!technology) {
      throw new TechnologyNotFoundError();
    }

    if (await this.repository.nameExists(command.getName())) {
      throw new TechnologyAlreadyExistsError();
    }

    technology.setName(command.getName());

    const updated = await this.repository.save(technology);

    return plainToInstance(Technology, {
      id: updated.getId(),
      name: updated.getName(),
      updatedAt: updated.getUpdateDate(),
    });
  }
}
