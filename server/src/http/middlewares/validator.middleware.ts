import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export default function validate(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const message = errors.array();

  return res.status(400).json({ statusCode: 400, message });
}
