import { NextFunction, Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import ActionInterface from '../../../domain/interfaces/action.interface';
import DeleteTechnologyCommand from '../../../application/commands/technologies/delete.technology.command';
import DeleteTechnologyHandler from '../../../application/handlers/technologies/delete.technology.handler';
import HandlerInterface from '../../../domain/interfaces/handler.interface';

/**
 * Middleware for deleting a technology.
 */
@Service()
export default class DeleteTechnologyAction implements ActionInterface {
  constructor(
    @Inject(() => DeleteTechnologyHandler)
    private readonly handler: HandlerInterface<void>,
  ) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    const command = new DeleteTechnologyCommand(Number(req.params.id));

    try {
      await this.handler.execute(command);

      return res.status(200).json({ message: 'Deleted' });
    } catch (error) {
      return next(error);
    }
  }
}
