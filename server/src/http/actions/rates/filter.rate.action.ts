import { Request, Response } from 'express';
import type ActionInterface from '../action.interface';
import FilterRateHandler from '../../../application/handlers/rates/filter.rate.handler';
import FilterRatesCommand from '../../../application/commands/rates/filter.rates.command';
import type { Rate } from '../../../domain/entities/rate.entity';

class FilterRateAction implements ActionInterface {
  async run(req: Request, res: Response): Promise<Response> {
    const command: FilterRatesCommand = new FilterRatesCommand(
      req.body.technologyIds,
      req.body.seniority,
      req.body.language,
      req.body.currency,
    );

    const filteredRates: Rate[] = await FilterRateHandler.execute(command);
    return res.status(200).json(filteredRates);
  }
}

export default new FilterRateAction();
