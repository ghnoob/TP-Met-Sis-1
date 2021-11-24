import { NextFunction, Request, Response } from 'express';
import FindRateByIdCommand from '../../../application/commands/rates/find.rate.by.id.command';
import findRateByIdHandler from '../../../application/handlers/rates/find.rate.by.id.handler';

class FindRateByIdAction {
  async run(req: Request, res: Response, next: NextFunction) {
    const command: FindRateByIdCommand = new FindRateByIdCommand(req.params.id);

    try {
      return res.status(200).json(await findRateByIdHandler.execute(command));
    } catch (error) {
      return next(error);
    }
  }
}

export default new FindRateByIdAction();
