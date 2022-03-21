import { NextFunction, Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import ActionInterface from '../../../domain/interfaces/action.interface';
import DeleteRateCommand from '../../../application/commands/rates/delete.rate.command';
import DeleteRateHandler from '../../../application/handlers/rates/delete.rate.handler';
import HandlerInterface from '../../../domain/interfaces/handler.interface';

/**
 * Middleware for deleting a rate.
 */
@Service()
export default class DeleteRateAction implements ActionInterface {
  constructor(
    @Inject(() => DeleteRateHandler)
    private readonly handler: HandlerInterface<void>,
  ) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    const command = new DeleteRateCommand(Number(req.params.id));

    try {
      await this.handler.execute(command);
      return res.status(204).end();
    } catch (error) {
      return next(error);
    }
  }
}
