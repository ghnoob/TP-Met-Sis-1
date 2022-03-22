import { Request, Response, NextFunction, Router } from 'express';
import { Inject, Service } from 'typedi';
import CommonRoutes from './common.routes';
import ActionInterface from '../../domain/interfaces/action.interface';
import CreateRateAction from '../actions/rates/create.rate.action';
import ListRateAction from '../actions/rates/list.rate.action';
import FilterRateAction from '../actions/rates/filter.rate.action';
import UpdateRateAction from '../actions/rates/update.rate.action';
import DeleteRateAction from '../actions/rates/delete.rate.action';
import FindRateByIdAction from '../actions/rates/find.rate.by.id.action';
import createRateValidator from '../middlewares/validators/create.rate.validator';
import updateRateValidator from '../middlewares/validators/update.rate.validator';
import filterRateSanitizer from '../middlewares/validators/filter.rate.validator';
import validate from '../middlewares/validator.middleware';

/**
 * @swagger
 * tags:
 *   name: Rates
 *   description: All about /rates
 */
@Service({ id: 'routes', multiple: true })
class RateRoutes extends CommonRoutes {
  constructor(
    @Inject(() => ListRateAction)
    private readonly listRateAction: ActionInterface,

    @Inject(() => FindRateByIdAction)
    private readonly findRateByIdAction: ActionInterface,

    @Inject(() => CreateRateAction)
    private readonly createRateAction: ActionInterface,

    @Inject(() => UpdateRateAction)
    private readonly updateRateAction: ActionInterface,

    @Inject(() => DeleteRateAction)
    private readonly deleteRateAction: ActionInterface,

    @Inject(() => FilterRateAction)
    private readonly filterRateAction: ActionInterface,
  ) {
    super('/rates');
    this.setUpRoutes();
  }

  /**
   * @swagger
   * /rates:
   *   get:
   *     summary: returns all the rates.
   *     tags: [Rates]
   *     responses:
   *       '200':
   *         description: 'a JSON array of rates'
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Rate'
   *   post:
   *     summary: create a new rate.
   *     tags: [Rates]
   *     requestBody:
   *       description: The rate to create
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateRateCommand'
   *     responses:
   *       '201':
   *         description: The created rate
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Rate'
   *       '400':
   *         $ref: '#/components/responses/RateValidationError'
   *       '404':
   *         $ref: '#/components/responses/TechnologyNotFound'
   *       '422':
   *         description: The rate already exists
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorResponse'
   *             example:
   *               statusCode: 422
   *               name: Unprocessable Entity
   *               message: Rate already exists.
   *
   * /rates/{id}:
   *   get:
   *     summary: return a rate by its id.
   *     tags: [Rates]
   *     parameters:
   *       - in: path
   *         name: id
   *         exampple: 1
   *         schema:
   *           type: number
   *         required: true
   *         description: id of the rate to get
   *     responses:
   *       '200':
   *         description: 'The found rate'
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Rate'
   *       '404':
   *         $ref: '#/components/responses/RateNotFound'
   *   patch:
   *     summary: Edit an existing rate.
   *     tags: [Rates]
   *     parameters:
   *       - in: path
   *         name: id
   *         example: 1
   *         schema:
   *           type: number
   *         required: true
   *         description: id of the rate to edit
   *     requestBody:
   *       description: The properties to update
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdateRateCommand'
   *     responses:
   *       '200':
   *         description: The updated rate
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Rate'
   *       '400':
   *         $ref: '#/components/responses/RateValidationError'
   *       '404':
   *         $ref: '#/components/responses/RateNotFound'
   *   delete:
   *     summary: Delete a rate.
   *     tags: [Rates]
   *     parameters:
   *       - in: path
   *         name: id
   *         example: 1
   *         schema:
   *           type: number
   *         required: true
   *         description: id of the rate to delete
   *     responses:
   *       '200':
   *         $ref: '#/components/responses/Deleted'
   *       '404':
   *         $ref: '#/components/responses/RateNotFound'
   *
   * /rates/filter:
   *   post:
   *     summary: Search rates with a filter
   *     tags: [Rates]
   *     requestBody:
   *       description: Filter paramaters
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/FilterRatesCommand'
   *     responses:
   *       '200':
   *         description: Array of rates that passed the filters
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Rate'
   *
   *
   * components:
   *   responses:
   *     RateNotFound:
   *         description: 'Rate not found'
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorResponse'
   *             example:
   *               statusCode: 404
   *               name: Not Found
   *               message: Rate not found.
   *     RateValidationError:
   *       description: Validation error
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/ErrorResponse'
   *           example:
   *             statusCode: 400
   *             name: Bad Request
   *             message:
   *               - value: abc
   *                 msg: value must be a number
   *                 param: averageSalary
   *                 location: body
   *     Deleted:
   *       description: Deleted successfully
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               message:
   *                 type: string
   *                 example: Deleted
   */
  protected setUpRoutes(): Router {
    this.getRouter().get('/', (req: Request, res: Response, next: NextFunction) =>
      this.listRateAction.run(req, res, next),
    );

    this.getRouter().get('/:id', (req: Request, res: Response, next: NextFunction) =>
      this.findRateByIdAction.run(req, res, next),
    );

    this.getRouter().post('/', createRateValidator, validate, (req: Request, res: Response, next: NextFunction) =>
      this.createRateAction.run(req, res, next),
    );

    this.getRouter().patch('/:id', updateRateValidator, validate, (req: Request, res: Response, next: NextFunction) =>
      this.updateRateAction.run(req, res, next),
    );

    this.getRouter().delete('/:id', (req: Request, res: Response, next: NextFunction) =>
      this.deleteRateAction.run(req, res, next),
    );

    this.getRouter().post('/filter', filterRateSanitizer, (req: Request, res: Response, next: NextFunction) =>
      this.filterRateAction.run(req, res, next),
    );

    return this.getRouter();
  }
}
export default RateRoutes;
