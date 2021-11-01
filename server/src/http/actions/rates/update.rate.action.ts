import { Request, Response } from "express";
import UpdateRateCommand from "../../../application/commands/rates/update.rate.command";
import updateRateHandler from "../../../application/handlers/rates/update.rate.handler";

class UpdateRateAction {
    async run(req: Request, res: Response) {
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
            const message: string = (error as Error).message;

            return res.status(message === "Not found" ? 404 : 400).json({ message });
        }
    }
}

export default new UpdateRateAction();