import { Request, Response, NextFunction } from 'express';

/**
 * Express middleware.
 */
export default interface ActionInterface {
  /**
   * Express middleware function.
   */
  run(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}
