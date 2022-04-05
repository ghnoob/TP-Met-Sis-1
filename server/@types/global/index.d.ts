import User from '../../src/domain/entities/user.entity';

declare module '@types/express-serve-static-core' {
  interface Request {
    user?: User;
  }
}
