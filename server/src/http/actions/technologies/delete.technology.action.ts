import { Request, Response } from "express";
import DeleteTechnologyCommand from "../../../application/commands/technologies/delete.technology.command";
import DeleteTechnologyHandler from "../../../application/handlers/technologies/delete.technology.handler";

class DeleteTechnologyAction {
    async run(req: Request, res: Response) {

        const command: DeleteTechnologyCommand = new DeleteTechnologyCommand(req.params.id);

        try {
            await DeleteTechnologyHandler.execute(command);
        } catch (error) {
            return res.status(404).json({ message: (error as Error).message });
        }
        return res.status(204).json({ message: "Technology deleted" });
    }
}

export default new DeleteTechnologyAction();