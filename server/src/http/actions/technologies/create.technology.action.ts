import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import CreateTechnologyCommand from "../../../application/commands/technologies/create.technology.command";
import CreateTechnologyHandler from "../../../application/handlers/technologies/create.technology.handler";


class CreateTechnologyAction {
    async run(req: Request, res: Response, next: NextFunction) {
        try {
            validationResult(req).throw();

            const command: CreateTechnologyCommand = new CreateTechnologyCommand(req.body.name);

            await CreateTechnologyHandler.execute(command);

            return res.status(201).json({message: "Technology created"});
        } catch (error) {
            return next(error);
        }
    }
}

export default new CreateTechnologyAction();