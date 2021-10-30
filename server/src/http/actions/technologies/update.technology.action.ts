import { Request, Response } from "express";
import UpdateTechnologyCommand from "../../../application/commands/technologies/update.technology.command";
import UpdateTechnologyHandler from "../../../application/handlers/technologies/update.technology.handler";
import type ApplicationError from "../../../application/customErrors/application.error";

class UpdateTechnologyAction {
    async run(req: Request, res: Response) {
        const command: UpdateTechnologyCommand = new UpdateTechnologyCommand(req.params.id, req.body.name);

        try {
            await UpdateTechnologyHandler.execute(command);

            return res.status(201).json({message: "Technology updated"});
        } catch (error) {
            const err = error as ApplicationError;
            return res.status(err.status).json({ message: err.message });
        }
    }
}

export default new UpdateTechnologyAction();