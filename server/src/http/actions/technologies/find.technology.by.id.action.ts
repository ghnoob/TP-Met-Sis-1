import { NextFunction, Request, Response } from "express";
import FindTechnologyByIdCommand from "../../../application/commands/technologies/find.technology.by.id.command";
import findTechnologyByIdHandler from "../../../application/handlers/technologies/find.technology.by.id.handler";

class FindRateByIdAction {
    async run(req: Request, res: Response, next: NextFunction) {
        const command: FindTechnologyByIdCommand = new FindTechnologyByIdCommand(req.params.id);

        try {
            return res.status(200).json(await findTechnologyByIdHandler.execute(command));
        } catch (error) {
            return next(error);
        }
    }
}

export default new FindRateByIdAction();
