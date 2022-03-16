import type { NextFunction, Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import type ActionInterface from '../../../domain/interfaces/action.interface';
import FindTechnologyByIdCommand from '../../../application/commands/technologies/find.technology.by.id.command';
import FindTechnologyByIdHandler from '../../../application/handlers/technologies/find.technology.by.id.handler';
import type HandlerInterface from '../../../domain/interfaces/handler.interface';
import type { Technology } from '../../../domain/entities/technology.entity';

@Service()
export default class FindTechnologyByIdAction implements ActionInterface {
  constructor(
    @Inject(() => FindTechnologyByIdHandler)
    private readonly handler: HandlerInterface<Technology>,
  ) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    const command: FindTechnologyByIdCommand = new FindTechnologyByIdCommand(req.params.id);

    try {
      return res.status(200).json(await this.handler.execute(command));
    } catch (error) {
      return next(error);
    }
  }
}
