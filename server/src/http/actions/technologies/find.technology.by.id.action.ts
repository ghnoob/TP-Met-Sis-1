import { NextFunction, Request, Response } from 'express';
import { Service } from 'typedi';
import ActionInterface from '../../../domain/interfaces/action.interface';
import FindTechnologyByIdCommand from '../../../application/commands/technologies/find.technology.by.id.command';
import findTechnologyByIdHandler from '../../../application/handlers/technologies/find.technology.by.id.handler';

@Service()
export default class FindTechnologyByIdAction implements ActionInterface {
  async run(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    const command: FindTechnologyByIdCommand = new FindTechnologyByIdCommand(req.params.id);

    try {
      return res.status(200).json(await findTechnologyByIdHandler.execute(command));
    } catch (error) {
      return next(error);
    }
  }
}
