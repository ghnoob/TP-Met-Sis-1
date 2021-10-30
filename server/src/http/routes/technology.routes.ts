import { Application } from "express";
import CreateTechnologyAction from "../actions/technologies/create.technology.action";
import DeleteTechnologyAction from "../actions/technologies/delete.technology.action";
import ListTechnologyAction from "../actions/technologies/list.technology.action";
import UpdateTechnologyAction from "../actions/technologies/update.technology.action";
import CommonRoutes from "./common.routes";


class RateRoutes extends CommonRoutes {
    constructor (app: Application){
        super(app, "Rate")
    }

    
        setUpRoutes(): Application {

            this.app.get('/rates', ListTechnologyAction.run);
    
            this.app.post('/rates', CreateTechnologyAction.run);
    
            // this.app.put('/rates', UpdateTechnologyAction.run);
    
            // this.app.delete('/rates', DeleteTechnologyAction.run);
            
    
            return this.app;

        }
}
export default RateRoutes;