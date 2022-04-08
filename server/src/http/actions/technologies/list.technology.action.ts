import { Request, Response } from 'express';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import ActionInterface from '../../../domain/interfaces/action.interface';
import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';

/**
 * Middleware for listing all the technologies.
 */
@Service()
export default class ListTechnologyAction implements ActionInterface {
  constructor(
    @InjectRepository(TechnologyRepository)
    private readonly repository: TechnologyRepository,
  ) {}

  async run(_req: Request, res: Response): Promise<Response> {
    const technologies = await this.repository.findAll();

    return res.status(200).json(technologies);
  }
}
