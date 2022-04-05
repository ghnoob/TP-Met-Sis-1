import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import ApplicationError from '../../application/errors/application.error';
import UserNotFoundError from '../../application/errors/auth/user.not.found.error';
import config from '../../config';
import User from '../../domain/entities/user.entity';

/**
 * Authentication middleware.
 *
 * Receives a bearer token (JWT) in the header
 * adds an `user` property to the request object indicating the owner of the request.
 * @throws {ApplicationError} If the decoded token is a string instead of an object (likely to not ever happen).
 * @throws {UserNotFoundError} If the token is correct but the user does not exist (problably because it was deleted).
 */
async function authenticate(req: Request, _res: Response, next: NextFunction): Promise<void> {
  const token = (req.headers.authorization ?? '').split(' ')[1];

  try {
    const decoded = verify(token, config.jwtSecretKey);

    if (typeof decoded === 'string') {
      throw new ApplicationError();
    }

    const user = await getRepository(User).findOne(decoded.id);

    if (!user) {
      throw new UserNotFoundError();
    }

    req.user = user;

    return next();
  } catch (err) {
    return next(err);
  }
}

export default authenticate;
