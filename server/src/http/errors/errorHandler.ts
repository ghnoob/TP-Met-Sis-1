import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import statusCodeMapper from './statusCodeMapper';

const errorHandler: ErrorRequestHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  return res.status(statusCodeMapper(err.name)).json(err);
};

export default errorHandler;
