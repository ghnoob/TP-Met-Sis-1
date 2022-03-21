import { Request, Response } from 'express';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Service } from 'typedi';
import ActionInterface from '../../../domain/interfaces/action.interface';
import RateRepository from '../../../infrastructure/repositories/rate.repository';

/**
 * Middleware for listing all the rates.
 */
@Service()
export default class ListRateAction implements ActionInterface {
  constructor(
    @InjectRepository(RateRepository)
    private readonly repository: RateRepository,
  ) {}

  async run(_req: Request, res: Response): Promise<Response> {
    return res.status(200).json(await this.repository.findAll());
  }
}
