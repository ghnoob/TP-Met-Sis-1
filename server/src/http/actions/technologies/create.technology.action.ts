import { Request, Response } from "express";
import CreateTechnologyCommand from "../../../application/commands/technologies/create.technology.command";
import CreateTechnologyHandler from "../../../application/handlers/technologies/create.technology.handler";


class CreateTechnologyAction {
    async run(req: Request, res: Response) {
        const command: CreateTechnologyCommand = req.body;
        
        await CreateTechnologyHandler.execute(command);
        
        return res.status(201).json({message: "Technology created"});
    }
}

export default new CreateTechnologyAction();