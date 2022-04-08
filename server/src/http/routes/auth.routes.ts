import { NextFunction, Request, Response, Router } from 'express';
import { Inject, Service } from 'typedi';
import ActionInterface from '../../domain/interfaces/action.interface';
import LoginAction from '../actions/auth/login.action';
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
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 *   responses:
 *     InvalidToken:
 *       description: A valid JWT must be provided in the Authorization header to access this endpoint.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           example:
 *             statusCode: 401
 *             name: Unauthorized
 *             messsage: jwt must be provided.
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
 *         $ref: '#/components/responses/EmailInUse'
 * /auth/login:
 *   post:
 *     summary: Logs in with an already created account.
 *     tags: [Auth]
 *     requestBody:
 *       description: Longin credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginCommand'
 *     responses:
 *       200:
 *         description: Successful login.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   readOnly: true
 *                   description: The generated JSON Web Token
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MX0.amQMkQV_5SLABZpVALQoqE1xr1MfujMtaoJIqrNfNbg
 *       400:
 *         $ref: '#/components/responses/EmailNotFound'
 *       401:
 *         $ref: '#/components/responses/WrongPassword'
 */
/**
 * Authentication endpoints.
 */
@Service({ id: 'routes', multiple: true })
export default class AuthRoutes extends CommonRoutes {
  constructor(
    @Inject(() => SignupAction)
    private readonly signupAction: ActionInterface,

    @Inject(() => LoginAction)
    private readonly loginAction: ActionInterface,
  ) {
    super('/auth');
    this.setUpRoutes();
  }
  protected setUpRoutes(): Router {
    this.getRouter().post('/signup', signupValidator, validate, (req: Request, res: Response, next: NextFunction) =>
      this.signupAction.run(req, res, next),
    );

    this.getRouter().post('/login', (req, res, next) => this.loginAction.run(req, res, next));

    return this.getRouter();
  }
}
