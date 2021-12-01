import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import statusCodeMapper from './statusCodeMapper';

// eslint-disable-next-line
const errorHandler: ErrorRequestHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode: number = statusCodeMapper(err.name);

  // los errores de validacion tiene errors y los demas message
  return res.status(statusCode).json({ statusCode, message: err.errors ?? err.message });
};

export default errorHandler;
