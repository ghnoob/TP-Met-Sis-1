import { NextFunction, Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import ActionInterface from '../../../domain/interfaces/action.interface';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import UpdateTechnologyCommand from '../../../application/commands/technologies/update.technology.command';
import UpdateTechnologyHandler from '../../../application/handlers/technologies/update.technology.handler';
import Technology from '../../../domain/entities/technology.entity';

@Service()
export default class UpdateTechnologyAction implements ActionInterface {
  constructor(
    @Inject(() => UpdateTechnologyHandler)
    private readonly handler: HandlerInterface<Technology>,
  ) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const command: UpdateTechnologyCommand = new UpdateTechnologyCommand(req.params.id, req.body.name);

      const technology = await this.handler.execute(command);

      return res.status(200).json(technology);
    } catch (error) {
      return next(error);
    }
  }
}
