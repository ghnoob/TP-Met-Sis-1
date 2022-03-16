import type { NextFunction, Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import type ActionInterface from '../../../domain/interfaces/action.interface';
import type HandlerInterface from '../../../domain/interfaces/handler.interface';
import FindRateByIdCommand from '../../../application/commands/rates/find.rate.by.id.command';
import FindRateByIdHandler from '../../../application/handlers/rates/find.rate.by.id.handler';
import type { Rate } from '../../../domain/entities/rate.entity';

@Service()
export default class FindRateByIdAction implements ActionInterface {
  constructor(
    @Inject(() => FindRateByIdHandler)
    private readonly handler: HandlerInterface<Rate>,
  ) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    const command: FindRateByIdCommand = new FindRateByIdCommand(req.params.id);

    try {
      return res.status(200).json(await this.handler.execute(command));
    } catch (error) {
      return next(error);
    }
  }
}
