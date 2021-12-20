import { Application } from 'express';
import CommonRoutes from './common.routes';
import CreateRateAction from '../actions/rates/create.rate.action';
import ListRateAction from '../actions/rates/list.rate.action';
import FilterRateAction from '../actions/rates/filter.rate.action';
import UpdateRateAction from '../actions/rates/update.rate.action';
import DeleteRateAction from '../actions/rates/delete.rate.action';
import findRateByIdAction from '../actions/rates/find.rate.by.id.action';
import createRateValidator from '../../application/validators/create.rate.validator';
import updateRateValidator from '../../application/validators/update.rate.validator';

/**
 * @swagger
 * tags:
 *   name: Rates
 *   description: All about /rates
 */
class RateRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Rate');
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
   *         description: Validation error or technology does not exist
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorResponse'
   *             example:
   *               statusCode: 400
   *               message: The id of an existent technology must be provided in the request body.
   *       '422':
   *         description: The rate already exists
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorResponse'
   *             example:
   *               statusCode: 422
   *               message: Rate already exists.
   *
   * /rates/{id}:
   *   get:
   *     summary: return a rate by its id.
   *     tags: [Rates]
   *     parameters:
   *       - in: path
   *         name: id
   *         exampple: 23TplPdS
   *         schema:
   *           type: string
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
   *         example: 23TplPdS
   *         schema:
   *           type: string
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
   *         description: Validation error
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorResponse'
   *             example:
   *               statusCode: 400
   *               message:
   *                 - value: abc
   *                   msg: value must be a numeric string, positive, up to 2 decimal places
   *                   param: averageSalary
   *                   location: body
   *       '404':
   *         $ref: '#/components/responses/RateNotFound'
   *   delete:
   *     summary: Delete a rate.
   *     tags: [Rates]
   *     parameters:
   *       - in: path
   *         name: id
   *         example: 23TplPdS
   *         schema:
   *           type: string
   *         required: true
   *         description: id of the rate to delete
   *     responses:
   *       '204':
   *         description: Rate delete sucessfully
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
   *               message: Rate not found.
   */
  setUpRoutes(): Application {
    this.app.get('/rates', ListRateAction.run);

    this.app.get('/rates/:id', findRateByIdAction.run);

    this.app.post('/rates', createRateValidator.validate(), CreateRateAction.run);

    this.app.patch('/rates/:id', updateRateValidator.validate(), UpdateRateAction.run);

    this.app.delete('/rates/:id', DeleteRateAction.run);

    this.app.post('/rates/filter', FilterRateAction.run);

    return this.app;
  }
}
export default RateRoutes;
