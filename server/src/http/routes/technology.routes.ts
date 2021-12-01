import { Application } from 'express';
import { body } from 'express-validator';
import CreateTechnologyAction from '../actions/technologies/create.technology.action';
import DeleteTechnologyAction from '../actions/technologies/delete.technology.action';
import ListTechnologyAction from '../actions/technologies/list.technology.action';
import findTechnologyByIdAction from '../actions/technologies/find.technology.by.id.action';
import UpdateTechnologyAction from '../actions/technologies/update.technology.action';
import CommonRoutes from './common.routes';

/**
 * @swagger
 * tags:
 *   name: Technologies
 *   description: All about /technologies
 */
class TechnologyRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Technologies');
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
   *         description: Technology created sucessfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   readOnly: true
   *                   default: Technology created.
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
   *         example: eWRhpRV
   *         schema:
   *           type: string
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
   *   put:
   *     summary: Edit an existing technology.
   *     tags: [Technologies]
   *     parameters:
   *       - in: path
   *         name: id
   *         example: eWRhpRV
   *     requestBody:
   *       description: The properties to update
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdateTechnologyCommand'
   *     responses:
   *       '201':
   *         description: Technology updated sucessfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   readOnly: true
   *                   default: Technology updated.
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
  setUpRoutes(): Application {
    this.app.get('/technologies', ListTechnologyAction.run);

    this.app.get('/technologies/:id', findTechnologyByIdAction.run);

    this.app.post(
      '/technologies',
      body('name', 'value must not be empty').trim().toLowerCase().notEmpty(),
      CreateTechnologyAction.run,
    );

    this.app.put(
      '/technologies/:id',
      body('name', 'value must not be empty').trim().toLowerCase().notEmpty(),
      UpdateTechnologyAction.run,
    );

    this.app.delete('/technologies/:id', DeleteTechnologyAction.run);

    return this.app;
  }
}
export default TechnologyRoutes;
