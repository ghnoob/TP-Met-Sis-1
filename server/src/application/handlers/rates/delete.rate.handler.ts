import RateRepository from "../../../infrastructure/repositories/rate.repository";
import UpdateRateCommand from "../../commands/update.command.rates";

class UpdateRateHandler{
    async execute(command:UpdateRateCommand){
        const rate = await RateRepository.findOneById(command.getId());

        if(!rate){
            throw new Error("Not found");
        }

        
        await RateRepository.deleteById(rate.getId());
    }
}
export default new UpdateRateHandler();