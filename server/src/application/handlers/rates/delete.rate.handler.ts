import rateRepository from "../../infrastructure/repositories/rate.repository";
import {UpdateRateCommand} from "../commands/update.rate.command"

class UpdateRateHandler{
    async execute(command:UpdateRateCommand){
        const rate = await rateRepository.findOneById(command.id);

        if(!rate){
            throw new Error("Not found");
        }

        
        await rateRepository.deleteById(rate);
    }
}
export default new UpdateRateHandler();