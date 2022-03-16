import type { Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import type ActionInterface from '../../../domain/interfaces/action.interface';
import FilterRateHandler from '../../../application/handlers/rates/filter.rate.handler';
import FilterRatesCommand from '../../../application/commands/rates/filter.rates.command';
import type HandlerInterface from '../../../domain/interfaces/handler.interface';
import type { Rate } from '../../../domain/entities/rate.entity';

@Service()
export default class FilterRateAction implements ActionInterface {
  constructor(
    @Inject(() => FilterRateHandler)
    private readonly handler: HandlerInterface<Rate[]>,
  ) {}

  async run(req: Request, res: Response): Promise<Response> {
    const command: FilterRatesCommand = new FilterRatesCommand(
      req.body.technologyIds,
      req.body.seniority,
      req.body.language,
      req.body.currency,
    );

    const filteredRates: Rate[] = await this.handler.execute(command);
    return res.status(200).json(filteredRates);
  }
}
