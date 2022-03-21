import { InjectRepository } from 'typeorm-typedi-extensions';
import { Service } from 'typedi';
import { DeleteResult } from 'typeorm';
import DeleteTechnologyCommand from '../../commands/technologies/delete.technology.command';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import TechnologyNotFoundError from '../../errors/technologies/technology.not.found.error';
import TechnologyHasRatesError from '../../errors/technologies/technology.has.rates.error';
import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';

/**
 * Handler for deleting a technology.
 */
@Service()
export default class DeleteTechnologyHandler implements HandlerInterface<DeleteResult> {
  constructor(
    @InjectRepository(TechnologyRepository)
    private readonly repository: TechnologyRepository,
  ) {}

  /**
   * Soft deletes a technology from the database.
   * @param command DTO with information to delete the rate.
   * @throws {TechnologyNotFoundError} The technology was not found in the database.
   * @returns  Object indicating the success of the operation.
   */
  async execute(command: DeleteTechnologyCommand): Promise<DeleteResult> {
    if (!(await this.repository.idExists(command.getId()))) {
      throw new TechnologyNotFoundError();
    }

    if (await this.repository.hasRates(command.getId())) {
      throw new TechnologyHasRatesError();
    }

    return this.repository.softDelete(command.getId());
  }
}
