import { Request, Response } from 'express';
import { Service } from 'typedi';
import ActionInterface from '../../../domain/interfaces/action.interface';
import { Rate } from '../../../domain/entities/rate.entity';
import RateRepository from '../../../infrastructure/repositories/rate.repository';

@Service()
export default class ListRateAction implements ActionInterface {
  async run(_req: Request, res: Response): Promise<Response> {
    const rates: Rate[] = await RateRepository.findAll();

    return res.status(200).json(rates);
  }
}
