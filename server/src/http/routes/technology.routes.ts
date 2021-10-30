import { Application } from "express";
import CreateTechnologyAction from "../actions/technologies/create.technology.action";
// import DeleteTechnologyAction from "../actions/technologies/delete.technology.action";
import ListTechnologyAction from "../actions/technologies/list.technology.action";
import UpdateTechnologyAction from "../actions/technologies/update.technology.action";
import CommonRoutes from "./common.routes";


class TechnologyRoutes extends CommonRoutes {
    constructor (app: Application){
        super(app, "Technologies")
    }


    setUpRoutes(): Application {

        this.app.get('/technologies', ListTechnologyAction.run);

        this.app.post('/technologies', CreateTechnologyAction.run);

        this.app.put('/technologies/:id', UpdateTechnologyAction.run);

        // this.app.delete('/technologies', DeleteTechnologyAction.run);

        return this.app;

    }
}
export default TechnologyRoutes;
