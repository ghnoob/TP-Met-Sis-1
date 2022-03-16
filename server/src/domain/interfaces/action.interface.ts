import { Request, Response, NextFunction } from 'express';

export default interface ActionInterface {
  run(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}
