import { NextFunction, Request, Response } from 'express';
import UpdateTechnologyCommand from '../../../application/commands/technologies/update.technology.command';
import UpdateTechnologyHandler from '../../../application/handlers/technologies/update.technology.handler';

class UpdateTechnologyAction {
  async run(req: Request, res: Response, next: NextFunction) {
    try {
      const command: UpdateTechnologyCommand = new UpdateTechnologyCommand(req.params.id, req.body.name);

      const technology = await UpdateTechnologyHandler.execute(command);

      return res.status(200).json(technology);
    } catch (error) {
      return next(error);
    }
  }
}

export default new UpdateTechnologyAction();
