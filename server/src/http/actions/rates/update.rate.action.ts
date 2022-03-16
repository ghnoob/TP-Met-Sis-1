import { NextFunction, Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import ActionInterface from '../../../domain/interfaces/action.interface';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import UpdateRateCommand from '../../../application/commands/rates/update.rate.command';
import UpdateRateHandler from '../../../application/handlers/rates/update.rate.handler';
import Rate from '../../../domain/entities/rate.entity';

@Service()
export default class UpdateRateAction implements ActionInterface {
  constructor(
    @Inject(() => UpdateRateHandler)
    private readonly handler: HandlerInterface<Rate>,
  ) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const command: UpdateRateCommand = new UpdateRateCommand(
        req.params.id,
        req.body.averageSalary,
        req.body.grossMargin,
      );

      const rate = await this.handler.execute(command);

      return res.status(201).json(rate);
    } catch (error) {
      return next(error);
    }
  }
}
