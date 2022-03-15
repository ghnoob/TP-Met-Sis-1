import { NextFunction, Request, Response } from 'express';
import UpdateRateCommand from '../../../application/commands/rates/update.rate.command';
import updateRateHandler from '../../../application/handlers/rates/update.rate.handler';
import ActionInterface from '../../../domain/interfaces/action.interface';

class UpdateRateAction implements ActionInterface {
  async run(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const command: UpdateRateCommand = new UpdateRateCommand(
        req.params.id,
        req.body.averageSalary,
        req.body.grossMargin,
      );

      const rate = await updateRateHandler.execute(command);

      return res.status(201).json(rate);
    } catch (error) {
      return next(error);
    }
  }
}

export default new UpdateRateAction();
