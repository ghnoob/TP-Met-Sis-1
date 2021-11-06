import { Application } from "express";
import CommonRoutes from "./common.routes";
import CreateRateAction from "../actions/rates/create.rate.action";
import ListRateAction from "../actions/rates/list.rate.action";
import FilterRateAction from "../actions/rates/filter.rate.action";
import updateRateAction from "../actions/rates/update.rate.action";
import deleteRateAction from "../actions/rates/delete.rate.action";
import { body } from "express-validator";
import { CurrencyEnum } from "../../domain/enums/currency.enum";
import { LanguageEnum } from "../../domain/enums/language.enum";
import { SeniorityEnum } from "../../domain/enums/seniority.enum";

class RateRoutes extends CommonRoutes {
    constructor (app: Application){
        super(app, "Rate")
    }
    
        setUpRoutes(): Application {

            this.app.get('/rates', ListRateAction.run);
    
            this.app.post(
                '/rates',

                body('technology', 'value must not be empty').trim().notEmpty(),

                body(
                    'seniority',
                    `invalid value. Allowed: ${Object.values(SeniorityEnum).join(', ')}`
                ).trim().toLowerCase().isIn(Object.values(SeniorityEnum)),

                body(
                    'language',
                    `invalid value. Allowed: ${Object.values(LanguageEnum).join(', ')}`
                ).trim().toLowerCase().isIn(Object.values(LanguageEnum)),

                body(
                    ['averageSalary', 'grossMargin'],
                    'value must be a numeric string, positive, up to 2 decimal places',
                ).isString().trim().matches(/^\d+(\.\d{1,2})?$/),

                body(
                    'currency',
                    `invalid value. Allowed: ${Object.values(CurrencyEnum).join(', ')}`
                ).trim().toUpperCase().isIn(Object.values(CurrencyEnum)),

                CreateRateAction.run,
            );

            this.app.put(
                '/rates',
                body(
                    ['averageSalary', 'grossMargin'],
                    'value must be a numeric string, positive, up to 2 decimal places',
                ).isString().trim().matches(/^\d+(\.\d{1,2})?$/),

                updateRateAction.run,
            );
    
            this.app.delete('/rates', deleteRateAction.run);

            this.app.post(
                '/rates/filter',
                body(['seniority', 'language']).trim().toLowerCase(),
                body('currency').trim().toUpperCase(),
                FilterRateAction.run
            )
            
    
            return this.app;

        }
}
export default RateRoutes;