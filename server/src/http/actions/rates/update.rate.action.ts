import { Request, Response } from "express";
import { validationResult } from "express-validator";
import UpdateRateCommand from "../../../application/commands/rates/update.rate.command";
import ApplicationError from "../../../application/customErrors/application.error";
import updateRateHandler from "../../../application/handlers/rates/update.rate.handler";

class UpdateRateAction {
    async run(req: Request, res: Response) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const command: UpdateRateCommand = new UpdateRateCommand(
            req.params.id, 
            req.body.technology,
            req.body.seniority,
            req.body.language,
            req.body.averageSalary,
            req.body.grossMargin,
            req.body.currency);

        try {
            await updateRateHandler.execute(command);

            return res.status(201).json({message: "Rate updated"});
        } catch (error) {
            const err = error as ApplicationError;
            return res.status(err.status).json({ message: err.message });
        }
    }
}

export default new UpdateRateAction();