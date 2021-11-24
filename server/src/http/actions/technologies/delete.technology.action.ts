import { NextFunction, Request, Response } from 'express';
import DeleteTechnologyCommand from '../../../application/commands/technologies/delete.technology.command';
import DeleteTechnologyHandler from '../../../application/handlers/technologies/delete.technology.handler';

class DeleteTechnologyAction {
  async run(req: Request, res: Response, next: NextFunction) {
    const command: DeleteTechnologyCommand = new DeleteTechnologyCommand(req.params.id);

    try {
      await DeleteTechnologyHandler.execute(command);

      return res.status(200).json({ message: 'Technology deleted' });
    } catch (error) {
      return next(error);
    }
  }
}

export default new DeleteTechnologyAction();
