import { NextFunction, Request, Response } from 'express';
import ActionInterface from '../../../domain/interfaces/action.interface';
import DeleteRateCommand from '../../../application/commands/rates/delete.rate.command';
import DeleteRateHandler from '../../../application/handlers/rates/delete.rate.handler';

class DeleteRateAction implements ActionInterface {
  async run(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    const command: DeleteRateCommand = new DeleteRateCommand(req.params.id);

    try {
      await DeleteRateHandler.execute(command);
      return res.status(204).end();
    } catch (error) {
      return next(error);
    }
  }
}
export default new DeleteRateAction();
