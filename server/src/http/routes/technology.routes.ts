import { Application } from 'express';
import { body } from 'express-validator';
import CreateTechnologyAction from '../actions/technologies/create.technology.action';
import DeleteTechnologyAction from '../actions/technologies/delete.technology.action';
import ListTechnologyAction from '../actions/technologies/list.technology.action';
import findTechnologyByIdAction from '../actions/technologies/find.technology.by.id.action';
import UpdateTechnologyAction from '../actions/technologies/update.technology.action';
import CommonRoutes from './common.routes';

class TechnologyRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Technologies');
  }

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
