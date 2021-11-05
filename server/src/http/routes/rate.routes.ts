import { Application } from "express";
import CommonRoutes from "./common.routes";
import CreateRateAction from "../actions/rates/create.rate.action";
import ListRateAction from "../actions/rates/list.rate.action";
import FilterRateAction from "../actions/rates/filter.rate.action";
import UpdateRateAction from "../actions/rates/update.rate.action";
import DeleteRateAction from "../actions/rates/delete.rate.action";


class RateRoutes extends CommonRoutes {
    constructor (app: Application){
        super(app, "Rate")
    }
    
        setUpRoutes(): Application {

            this.app.get('/rates', ListRateAction.run);
    
            this.app.post('/rates', CreateRateAction.run);
    
            this.app.put('/rates/:id', UpdateRateAction.run);
    
            this.app.delete('/rates/:id', DeleteRateAction.run);

            this.app.post('/rates/filter', FilterRateAction.run);
            
    
            return this.app;

        }
}
export default RateRoutes;