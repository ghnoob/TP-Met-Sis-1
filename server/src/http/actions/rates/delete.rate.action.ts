import { Request, Response } from "express";
import DeleteRateCommand from "../../../application/commands/rates/delete.rate.command";
import ApplicationError from "../../../application/customErrors/application.error";
import DeleteRateHandler from "../../../application/handlers/rates/delete.rate.handler";

class DeleteRateAction {
    async run(req: Request, res: Response) {
        
        const command: DeleteRateCommand = new DeleteRateCommand(req.params.id);

        try {
            await DeleteRateHandler.execute(command);
            return res.status(200).json({message: "Rate deleted"});
        } catch (error) {
            const err = error as ApplicationError;
            return res.status(err.status).json({ message: err.message });
        }
    }
}
export default new DeleteRateAction();