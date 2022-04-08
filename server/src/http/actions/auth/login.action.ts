import { NextFunction, Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import LoginCommand from '../../../application/commands/auth/login.command';
import LoginHandler from '../../../application/handlers/auth/login.handler';
import ActionInterface from '../../../domain/interfaces/action.interface';
import HandlerInterface from '../../../domain/interfaces/handler.interface';

/**
 * Middleware for logging in.
 */
@Service()
export default class LoginAction implements ActionInterface {
  constructor(
    @Inject(() => LoginHandler)
    private readonly handler: HandlerInterface<unknown>,
  ) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const command = new LoginCommand(req.body.email, req.body.password);

    try {
      return res.status(200).json(await this.handler.execute(command));
    } catch (err) {
      return next(err);
    }
  }
}
