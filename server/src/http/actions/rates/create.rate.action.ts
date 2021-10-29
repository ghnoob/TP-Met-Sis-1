import { Request, Response } from "express";
import CreateRateHandler from "../../../application/handlers/rates/create.rate.handler";
import CreateRateCommand from "../../../application/commands/rates/create.rate.command";

class CreateRateAction {
    async run(req: Request, res: Response) {
        const command: CreateRateCommand = req.body;
        
        await CreateRateHandler.execute(command);
        
        return res.status(201).json({message: "Rate created"});
    }
}

export default new CreateRateAction();