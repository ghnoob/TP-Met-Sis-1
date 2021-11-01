import { Request, Response } from "express";
import DeleteTechnologyCommand from "../../../application/commands/technologies/delete.technology.command";
import DeleteTechnologyHandler from "../../../application/handlers/technologies/delete.technology.handler";
import type ApplicationError from "../../../application/customErrors/application.error";

class DeleteTechnologyAction {
    async run(req: Request, res: Response) {

        const command: DeleteTechnologyCommand = new DeleteTechnologyCommand(req.params.id);

        try {
            await DeleteTechnologyHandler.execute(command);
        } catch (error) {
            const err = error as ApplicationError;
            return res.status(err.status).json({ message: err.message });
        }
        return res.status(204).json({ message: "Technology deleted" });
    }
}

export default new DeleteTechnologyAction();