import { Service } from 'typedi';
import { DeleteResult } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import DeleteRateCommand from '../../commands/rates/delete.rate.command';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import RateRepository from '../../../infrastructure/repositories/rate.repository';
import RateNotFoundError from '../../errors/rates/rate.not.found.error';

/**
 * Handler for deleting a rate
 */
@Service()
export default class DeleteRateHandler implements HandlerInterface<DeleteResult> {
  constructor(
    @InjectRepository(RateRepository)
    private readonly repository: RateRepository,
  ) {}

  /**
   * Soft deletes a rate from the database
   * @param command DTO with information to delete the rate.
   * @throws {RateNotFoundError} The rate is not found in the database.
   * @returns Object indicating the success of the operation.
   */
  async execute(command: DeleteRateCommand) {
    if (!(await this.repository.idExists(command.getId()))) {
      throw new RateNotFoundError();
    }

    return this.repository.softDelete(command.getId());
  }
}
