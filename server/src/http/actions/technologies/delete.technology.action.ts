import { Request, Response } from "express";
import DeleteTechnologyCommand from "../../../application/commands/technologies/delete.technology.command";
import DeleteTechnologyHandler from "../../../application/handlers/technologies/delete.technology.handler";
import type ApplicationError from "../../../application/customErrors/application.error";

class DeleteTechnologyAction {
    async run(req: Request, res: Response) {

        const command: DeleteTechnologyCommand = new DeleteTechnologyCommand(req.params.id);

        try {
            await DeleteTechnologyHandler.execute(command);

            return res.status(200).json({message: "Technology deleted"});
        } catch (error) {
            const err = error as ApplicationError;
            return res.status(err.status).json({ message: err.message });
        }
    }
}

export default new DeleteTechnologyAction();