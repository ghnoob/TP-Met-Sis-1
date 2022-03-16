import { Request, Response, NextFunction, Router } from 'express';
import { Inject, Service } from 'typedi';
import ActionInterface from '../../domain/interfaces/action.interface';
import CommonRoutes from './common.routes';
import createTechnologyValidator from '../middlewares/validators/create.technology.validator';
import validate from '../middlewares/validator.middleware';
import ListTechnologyAction from '../actions/technologies/list.technology.action';
import FindTechnologyByIdAction from '../actions/technologies/find.technology.by.id.action';
import CreateTechnologyAction from '../actions/technologies/create.technology.action';
import UpdateTechnologyAction from '../actions/technologies/update.technology.action';
import DeleteTechnologyAction from '../actions/technologies/delete.technology.action';

/**
 * @swagger
 * tags:
 *   name: Technologies
 *   description: All about /technologies
 */
@Service({ id: 'routes', multiple: true })
class TechnologyRoutes extends CommonRoutes {
  constructor(
    @Inject(() => ListTechnologyAction)
    private readonly listTechnologyAction: ActionInterface,

    @Inject(() => FindTechnologyByIdAction)
    private readonly findTechnologyByIdAction: ActionInterface,

    @Inject(() => CreateTechnologyAction)
    private readonly createTechnologyAction: ActionInterface,

    @Inject(() => UpdateTechnologyAction)
    private readonly updateTechnologyAction: ActionInterface,

    @Inject(() => DeleteTechnologyAction)
    private readonly deleteTechnologyAction: ActionInterface,
  ) {
    super('/technologies');
    this.setUpRoutes();
  }

  /**
   * @swagger
   * /technologies:
   *   get:
   *     summary: returns all the technologies.
   *     tags: [Technologies]
   *     responses:
   *       '200':
   *         description: 'a JSON array of technologies'
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Technology'
   *   post:
   *     summary: create a new technology.
   *     tags: [Technologies]
   *     requestBody:
   *       description: The technology to create
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateTechnologyCommand'
   *     responses:
   *       '201':
   *         description: The created technology
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Technology'
   *       '400':
   *         $ref: '#/components/responses/TechnologyValidationError'
   *       '422':
   *         $ref: '#/components/responses/TechnologyAlreadyExists'
   *
   * /technologies/{id}:
   *   get:
   *     summary: return a technology by its id.
   *     tags: [Technologies]
   *     parameters:
   *       - in: path
   *         name: id
   *         type: string
   *         example: eWRhpRV
   *         required: true
   *         description: id of the technology to get
   *     responses:
   *       '200':
   *         description: 'The found technology'
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Technology'
   *       '404':
   *         $ref: '#/components/responses/TechnologyNotFound'
   *   patch:
   *     summary: Edit an existing technology.
   *     tags: [Technologies]
   *     parameters:
   *       - in: path
   *         name: id
   *         type: string
   *         required: true
   *         example: eWRhpRV
   *     requestBody:
   *       description: The properties to update
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdateTechnologyCommand'
   *     responses:
   *       '200':
   *         description: The updated technology
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Technology'
   *       '400':
   *         $ref: '#/components/responses/TechnologyValidationError'
   *       '404':
   *         $ref: '#/components/responses/TechnologyNotFound'
   *       '422':
   *         $ref: '#/components/responses/TechnologyAlreadyExists'
   *   delete:
   *     summary: Delete a technology.
   *     tags: [Technologies]
   *     parameters:
   *       - in: path
   *         name: id
   *         type: string
   *         required: true
   *         example: eWRhpRV
   *     responses:
   *       '204':
   *         description: Technology deleted sucessfully
   *       '404':
   *         $ref: '#/components/responses/TechnologyNotFound'
   *       '422':
   *         description: The technology cannot be deleted bacause there are rates associated with it
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorResponse'
   *             example:
   *               statusCode: 422
   *               message: This technology has rates associated with it. Delete them before deleting this.
   *
   * components:
   *   responses:
   *     TechnologyNotFound:
   *       description: 'Technology not found'
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/ErrorResponse'
   *           example:
   *             statusCode: 404
   *             message: Technology not found.
   *
   *     TechnologyValidationError:
   *       description: Validation error
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/ErrorResponse'
   *           example:
   *             statusCode: 400
   *             message:
   *               - value: ''
   *                 message: value must not be empty
   *                 param: name
   *                 location: body
   *
   *     TechnologyAlreadyExists:
   *       description: The technology already exists
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/ErrorResponse'
   *           example:
   *             statusCode: 422
   *             message: A technology with that name already exists.
   */
  protected setUpRoutes(): Router {
    this.getRouter().get('/', (req: Request, res: Response, next: NextFunction) =>
      this.listTechnologyAction.run(req, res, next),
    );

    this.getRouter().get('/:id', (req: Request, res: Response, next: NextFunction) =>
      this.findTechnologyByIdAction.run(req, res, next),
    );

    this.getRouter().post('/', createTechnologyValidator, validate, (req: Request, res: Response, next: NextFunction) =>
      this.createTechnologyAction.run(req, res, next),
    );

    this.getRouter().patch(
      '/:id',
      createTechnologyValidator,
      validate,
      (req: Request, res: Response, next: NextFunction) => this.updateTechnologyAction.run(req, res, next),
    );

    this.getRouter().delete('/:id', (req: Request, res: Response, next: NextFunction) =>
      this.deleteTechnologyAction.run(req, res, next),
    );

    return this.getRouter();
  }
}
export default TechnologyRoutes;
