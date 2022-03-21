import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import statusCodeMapper from '../errors/statusCodeMapper';

/**
 * @swagger
 * components:
 *   schemas:
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         statusCode:
 *           type: integer
 *           description: response status code
 *           default: 500
 *           readOnly: true
 *         message:
 *           oneOf:
 *             - type: string
 *             - type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: any
 *                     description: submitted value
 *                     example: 'abc123'
 *                   msg:
 *                     type: string
 *                     description: error message
 *                     example: The value must be a number.
 *                   param:
 *                     type: string
 *                     description: parameter name
 *                     example: quantity
 *                   location:
 *                     type: string
 *                     description: location of the error
 *                     enum: [body, query, params, cookies, headers]
 *                     example: body
 *           description: error description
 *           default: An error ocurred. Please try again.
 *           readOnly: true
 */

// eslint-disable-next-line
const errorHandler: ErrorRequestHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode: number = statusCodeMapper(err.name);

  // los errores de validacion tiene errors y los demas message
  return res.status(statusCode).json({ statusCode, message: err.errors ?? err.message });
};

export default errorHandler;
