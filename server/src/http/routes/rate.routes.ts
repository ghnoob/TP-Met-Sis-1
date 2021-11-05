import { Application } from "express";
import CommonRoutes from "./common.routes";
import CreateRateAction from "../actions/rates/create.rate.action";
import ListRateAction from "../actions/rates/list.rate.action";
import FilterRateAction from "../actions/rates/filter.rate.action";
import updateRateAction from "../actions/rates/update.rate.action";
import deleteRateAction from "../actions/rates/delete.rate.action";


class RateRoutes extends CommonRoutes {
    constructor (app: Application){
        super(app, "Rate")
    }
    
        setUpRoutes(): Application {

            this.app.get('/rates', ListRateAction.run);
    
            this.app.post('/rates', CreateRateAction.run);
    
            this.app.put('/rates/:id', updateRateAction.run);
    
            this.app.delete('/rates/:id', deleteRateAction.run);

            this.app.post('/rates/filter', FilterRateAction.run)
            
    
            return this.app;

        }
}
export default RateRoutes;