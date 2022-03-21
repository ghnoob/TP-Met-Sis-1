import { plainToInstance } from 'class-transformer';
import { Inject, Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import CreateRateCommand from '../../commands/rates/create.rate.command';
import FindTechnologyByIdCommand from '../../commands/technologies/find.technology.by.id.command';
import FindTechnologyByIdHandler from '../technologies/find.technology.by.id.handler';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import Rate from '../../../domain/entities/rate.entity';
import RateAlreadyExistsError from '../../errors/rates/rate.already.exists.error';
import RateRepository from '../../../infrastructure/repositories/rate.repository';
import Technology from '../../../domain/entities/technology.entity';

/**
 * Handler for creating a new rate.
 */
@Service()
export default class CreateRateHandler implements HandlerInterface<Rate> {
  constructor(
    @InjectRepository(RateRepository)
    private readonly repository: RateRepository,

    @Inject(() => FindTechnologyByIdHandler)
    private readonly findTechnologyHandler: HandlerInterface<Technology>,
  ) {}

  /**
   * Creates a new rate and stores it in the database.
   * @param command DTO with information to create the rate.
   * @throws {RateAlreadyExistsError} A rate with the same properties already exists in the database.
   * @returns The created rate.
   */
  async execute(command: CreateRateCommand): Promise<Rate> {
    const technology = await this.findTechnologyHandler.execute(
      new FindTechnologyByIdCommand(command.getTechnologyId()),
    );

    const existsRate = await this.repository.exists(
      command.getTechnologyId(),
      command.getSeniority(),
      command.getLanguage(),
      command.getCurrency(),
    );

    if (existsRate) {
      throw new RateAlreadyExistsError();
    }

    const rate = await this.repository.save(
      new Rate(
        technology,
        command.getSeniority(),
        command.getLanguage(),
        command.getAverageSalary(),
        command.getGrossMargin(),
        command.getCurrency(),
      ),
    );

    return plainToInstance(Rate, {
      id: rate.getId(),
      technology: { id: technology.getId(), name: technology.getName() },
      seniority: rate.getSeniority(),
      language: rate.getLanguage(),
      currency: rate.getCurrency(),
      createdAt: rate.getCreationDate(),
    });
  }
}
