import { Request, Response } from 'express';
import ActionInterface from '../../../domain/interfaces/action.interface';
import { Rate } from '../../../domain/entities/rate.entity';
import RateRepository from '../../../infrastructure/repositories/rate.repository';

class ListRateAction implements ActionInterface {
  async run(_req: Request, res: Response): Promise<Response> {
    const rates: Rate[] = await RateRepository.findAll();

    return res.status(200).json(rates);
  }
}

export default new ListRateAction();
