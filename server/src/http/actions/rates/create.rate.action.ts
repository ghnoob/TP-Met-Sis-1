import { NextFunction, Request, Response } from 'express';
import ActionInterface from '../../../domain/interfaces/action.interface';
import CreateRateHandler from '../../../application/handlers/rates/create.rate.handler';
import CreateRateCommand from '../../../application/commands/rates/create.rate.command';

class CreateRateAction implements ActionInterface {
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

      const rate = await CreateRateHandler.execute(command);

      return res.status(201).json(rate);
    } catch (error) {
      return next(error);
    }
  }
}

export default new CreateRateAction();
