import { Request, Response } from "express";
import CreateRateHandler from "../../../application/handlers/rates/create.rate.handler";
import CreateRateCommand from "../../../application/commands/rates/create.rate.command";
import type ApplicationError from "../../../application/customErrors/application.error";
import { validationResult } from "express-validator";

class CreateRateAction {
    async run(req: Request, res: Response) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

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