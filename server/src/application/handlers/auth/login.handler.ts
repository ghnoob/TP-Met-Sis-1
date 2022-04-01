import { sign } from 'jsonwebtoken';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import EmailNotFoundError from '../../errors/auth/email.not.found.error';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import LoginCommand from '../../commands/auth/login.command';
import UserRepository from '../../../infrastructure/repositories/user.repository';
import WrongPasswordError from '../../errors/auth/wrong.password.error';

/**
 * Retuens json web token of an user.
 */
@Service()
export default class LoginHandler implements HandlerInterface<unknown> {
  constructor(@InjectRepository() private readonly repository: UserRepository) {}

  async execute(command: LoginCommand): Promise<unknown> {
    const user = await this.repository.findByEmail(command.getEmail());

    if (!user) {
      throw new EmailNotFoundError();
    }

    const passwordMatch = await user.isPasswordValid(command.getPassword());

    if (!passwordMatch) {
      throw new WrongPasswordError();
    }

    const token = sign({ id: user.getId() }, process.env.JWT_SECRET_KEY ?? 'default');

    return { token };
  }
}
