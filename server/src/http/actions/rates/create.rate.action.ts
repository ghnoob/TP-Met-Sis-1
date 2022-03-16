import { NextFunction, Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import ActionInterface from '../../../domain/interfaces/action.interface';
import CreateRateHandler from '../../../application/handlers/rates/create.rate.handler';
import CreateRateCommand from '../../../application/commands/rates/create.rate.command';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import Rate from '../../../domain/entities/rate.entity';

@Service()
export default class CreateRateAction implements ActionInterface {
  constructor(
    @Inject(() => CreateRateHandler)
    private readonly handler: HandlerInterface<Rate>,
  ) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const command: CreateRateCommand = new CreateRateCommand(
        req.body.technology,
        req.body.seniority,
        req.body.language,
        req.body.averageSalary,
        req.body.grossMargin,
        req.body.currency,
      );

      const rate = await this.handler.execute(command);

      return res.status(201).json(rate);
    } catch (error) {
      return next(error);
    }
  }
}
