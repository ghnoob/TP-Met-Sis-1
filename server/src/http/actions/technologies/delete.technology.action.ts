import { NextFunction, Request, Response } from 'express';
import ActionInterface from '../action.interface';
import DeleteTechnologyCommand from '../../../application/commands/technologies/delete.technology.command';
import DeleteTechnologyHandler from '../../../application/handlers/technologies/delete.technology.handler';

class DeleteTechnologyAction implements ActionInterface {
  async run(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    const command: DeleteTechnologyCommand = new DeleteTechnologyCommand(req.params.id);

    try {
      await DeleteTechnologyHandler.execute(command);

      return res.status(204).end();
    } catch (error) {
      return next(error);
    }
  }
}

export default new DeleteTechnologyAction();
