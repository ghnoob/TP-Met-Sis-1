import { NextFunction, Request, Response } from "express";
import CreateRateHandler from "../../../application/handlers/rates/create.rate.handler";
import CreateRateCommand from "../../../application/commands/rates/create.rate.command";
import { validationResult } from "express-validator";

class CreateRateAction {
    async run(req: Request, res: Response, next: NextFunction) {
        try {
            validationResult(req).throw();

            const command: CreateRateCommand = new CreateRateCommand(
                req.body.technology,
                req.body.seniority,
                req.body.language,
                req.body.averageSalary,
                req.body.grossMargin,
                req.body.currency
            );
            await CreateRateHandler.execute(command);
            return res.status(201).json({message: "Rate created"});
        } catch (error) {
            return next(error);
        }
    }
}

export default new CreateRateAction();