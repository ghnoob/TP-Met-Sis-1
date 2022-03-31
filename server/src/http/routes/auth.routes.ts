import { NextFunction, Request, Response, Router } from 'express';
import { Inject, Service } from 'typedi';
import ActionInterface from '../../domain/interfaces/action.interface';
import SignupAction from '../actions/auth/signup.action';
import validate from '../middlewares/validator.middleware';
import signupValidator from '../middlewares/validators/signup.validator';
import CommonRoutes from './common.routes';

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 *
 * components:
 *   responses:
 *     AuthValidationError:
 *       description: Validation error
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 400
 *             name: Bad Request
 *             message:
 *               - value: 'this is not an email'
 *                 message: value must be an email
 *                 param: email
 *                 location: body
 *
 * /auth/signup:
 *   post:
 *     summary: Creates a new user account.
 *     tags: [Auth]
 *     requestBody:
 *       description: The user to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignupCommand'
 *     responses:
 *       201:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         $ref: '#/components/responses/AuthValidationError'
 *       409:
 *         description: 'The provided email is currently in use'
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               statusCode: 409
 *               name: Conflict
 *               message: This email is already registered with another account.
 */
/**
 * Authentication endpoints.
 */
@Service({ id: 'routes', multiple: true })
export default class AuthRoutes extends CommonRoutes {
  constructor(
    @Inject(() => SignupAction)
    private readonly signupAction: ActionInterface,
  ) {
    super('/auth');
    this.setUpRoutes();
  }
  protected setUpRoutes(): Router {
    this.getRouter().post('/signup', signupValidator, validate, (req: Request, res: Response, next: NextFunction) =>
      this.signupAction.run(req, res, next),
    );

    return this.getRouter();
  }
}
