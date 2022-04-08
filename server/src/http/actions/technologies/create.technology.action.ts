import { NextFunction, Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import CreateTechnologyCommand from '../../../application/commands/technologies/create.technology.command';
import CreateTechnologyHandler from '../../../application/handlers/technologies/create.technology.handler';
import Technology from '../../../domain/entities/technology.entity';
import User from '../../../domain/entities/user.entity';
import ActionInterface from '../../../domain/interfaces/action.interface';
import HandlerInterface from '../../../domain/interfaces/handler.interface';

/**
 * Middleware for creating a new technology.
 */
@Service()
export default class CreateTechnologyAction implements ActionInterface {
  constructor(
    @Inject(() => CreateTechnologyHandler)
    private readonly handler: HandlerInterface<Technology>,
  ) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    try {
      const command: CreateTechnologyCommand = new CreateTechnologyCommand(req.user as User, req.body.name);

      const technology: Technology = await this.handler.execute(command);

      return res.status(201).json(technology);
    } catch (error) {
      return next(error);
    }
  }
}
