import { NextFunction, Request, Response } from 'express';
import { Service } from 'typedi';
import CreateTechnologyCommand from '../../../application/commands/technologies/create.technology.command';
import CreateTechnologyHandler from '../../../application/handlers/technologies/create.technology.handler';
import type { Technology } from '../../../domain/entities/technology.entity';
import ActionInterface from '../../../domain/interfaces/action.interface';

@Service()
export default class CreateTechnologyAction implements ActionInterface {
  async run(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const command: CreateTechnologyCommand = new CreateTechnologyCommand(req.body.name);

      const technology: Technology = await CreateTechnologyHandler.execute(command);

      return res.status(201).json(technology);
    } catch (error) {
      return next(error);
    }
  }
}
