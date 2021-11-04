import { Request, Response } from "express";
import CreateRateHandler from "../../../application/handlers/rates/create.rate.handler";
import CreateRateCommand from "../../../application/commands/rates/create.rate.command";
import type ApplicationError from "../../../application/customErrors/application.error";

class CreateRateAction {
    async run(req: Request, res: Response) {
        try {
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
            const err: ApplicationError = error as ApplicationError;
            return res.status(err.status).json({ message: err.message });
        }
    }
}

export default new CreateRateAction();