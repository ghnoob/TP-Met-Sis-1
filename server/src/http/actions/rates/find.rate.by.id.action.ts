import { NextFunction, Request, Response } from 'express';
import { Service } from 'typedi';
import ActionInterface from '../../../domain/interfaces/action.interface';
import FindRateByIdCommand from '../../../application/commands/rates/find.rate.by.id.command';
import findRateByIdHandler from '../../../application/handlers/rates/find.rate.by.id.handler';

@Service()
export default class FindRateByIdAction implements ActionInterface {
  async run(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
    const command: FindRateByIdCommand = new FindRateByIdCommand(req.params.id);

    try {
      return res.status(200).json(await findRateByIdHandler.execute(command));
    } catch (error) {
      return next(error);
    }
  }
}
