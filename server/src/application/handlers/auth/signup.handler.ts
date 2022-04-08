import { plainToInstance } from 'class-transformer';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import EmailInUseError from '../../errors/auth/email.in.use.error';
import HandlerInterface from '../../../domain/interfaces/handler.interface';
import SignupCommand from '../../commands/auth/signup.command';
import User from '../../../domain/entities/user.entity';
import UserRepository from '../../../infrastructure/repositories/user.repository';

/**
 * Creates a new user and stores it in the database.
 */
@Service()
export default class SignupHandler implements HandlerInterface<User> {
  constructor(@InjectRepository() private readonly repository: UserRepository) {}

  async execute(command: SignupCommand): Promise<User> {
    if (await this.repository.emailExists(command.getEmail())) {
      throw new EmailInUseError();
    }

    const user = await this.repository.save(new User(command.getEmail(), command.getPassword()));

    return plainToInstance(User, {
      id: user.getId(),
      email: user.getEmail(),
      createdAt: user.getCreationDate(),
    });
  }
}
