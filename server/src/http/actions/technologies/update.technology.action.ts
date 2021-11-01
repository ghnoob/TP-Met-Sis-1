import { Request, Response } from "express";
import UpdateTechnologyCommand from "../../../application/commands/technologies/update.technology.command";
import UpdateTechnologyHandler from "../../../application/handlers/technologies/update.technology.handler";

class UpdateTechnologyAction {
    async run(req: Request, res: Response) {
        const command: UpdateTechnologyCommand = new UpdateTechnologyCommand(req.params.id, req.body.name);

        try {
            await UpdateTechnologyHandler.execute(command);

            return res.status(201).json({message: "Technology updated"});
        } catch (error) {
            const message: string = (error as Error).message;

            return res.status(message === "Not found" ? 404 : 400).json({ message });
        }
    }
}

export default new UpdateTechnologyAction();