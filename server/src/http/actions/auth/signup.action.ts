import { Request, Response, NextFunction } from 'express';
import { Inject, Service } from 'typedi';
import ActionInterface from '../../../domain/interfaces/action.interface';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import SignupCommand from '../../../application/commands/auth/signup.command';
import SignupHandler from '../../../application/handlers/auth/signup.handler';
import User from '../../../domain/entities/user.entity';

/**
 * Middleware for creating a new user account.
 */
@Service()
export default class SignupAction implements ActionInterface {
  constructor(
    @Inject(() => SignupHandler)
    private readonly handler: HandlerInterface<User>,
  ) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const command = new SignupCommand(req.body.email, req.body.password);

    try {
      return res.status(201).json(await this.handler.execute(command));
    } catch (error) {
      return next(error);
    }
  }
}
