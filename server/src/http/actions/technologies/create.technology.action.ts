import { NextFunction, Request, Response } from 'express';
import CreateTechnologyCommand from '../../../application/commands/technologies/create.technology.command';
import CreateTechnologyHandler from '../../../application/handlers/technologies/create.technology.handler';
import type { Technology } from '../../../domain/entities/technology.entity';

class CreateTechnologyAction {
  async run(req: Request, res: Response, next: NextFunction) {
    try {
      const command: CreateTechnologyCommand = new CreateTechnologyCommand(req.body.name);

      const technology: Technology = await CreateTechnologyHandler.execute(command);

      return res.status(201).json(technology);
    } catch (error) {
      return next(error);
    }
  }
}

export default new CreateTechnologyAction();
