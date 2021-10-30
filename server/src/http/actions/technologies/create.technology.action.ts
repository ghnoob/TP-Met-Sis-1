import { Request, Response } from "express";
import CreateTechnologyCommand from "../../../application/commands/technologies/create.technology.command";
import type ApplicationError from "../../../application/customErrors/application.error";
import CreateTechnologyHandler from "../../../application/handlers/technologies/create.technology.handler";


class CreateTechnologyAction {
    async run(req: Request, res: Response) {
        const command: CreateTechnologyCommand = new CreateTechnologyCommand(req.body.name);

        try {
            await CreateTechnologyHandler.execute(command);

            return res.status(201).json({message: "Technology created"});
        } catch (error) {
            const err = error as ApplicationError;
            return res.status(err.status).json({ message: err.message });
        }
    }
}

export default new CreateTechnologyAction();