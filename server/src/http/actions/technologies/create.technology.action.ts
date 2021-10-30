import { Request, Response } from "express";
import CreateTechnologyCommand from "../../../application/commands/technologies/create.technology.command";
import CreateTechnologyHandler from "../../../application/handlers/technologies/create.technology.handler";


class CreateTechnologyAction {
    async run(req: Request, res: Response) {
        const command: CreateTechnologyCommand = new CreateTechnologyCommand(req.body.name);

        try {
            await CreateTechnologyHandler.execute(command);

            return res.status(201).json({message: "Technology created"});
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }
}

export default new CreateTechnologyAction();