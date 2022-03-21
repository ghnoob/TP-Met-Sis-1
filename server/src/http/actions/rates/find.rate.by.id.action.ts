import { NextFunction, Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import ActionInterface from '../../../domain/interfaces/action.interface';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import FindRateByIdCommand from '../../../application/commands/rates/find.rate.by.id.command';
import FindRateByIdHandler from '../../../application/handlers/rates/find.rate.by.id.handler';
import Rate from '../../../domain/entities/rate.entity';

/**
 * Middleware for finding a rate by id.
 */
@Service()
export default class FindRateByIdAction implements ActionInterface {
  constructor(
    @Inject(() => FindRateByIdHandler)
    private readonly handler: HandlerInterface<Rate>,
  ) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    const command = new FindRateByIdCommand(Number(req.params.id));

    try {
      return res.status(200).json(await this.handler.execute(command));
    } catch (error) {
      return next(error);
    }
  }
}
