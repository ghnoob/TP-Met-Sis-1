import RateRepository from "../../../infrastructure/repositories/rate.repository";
import DeleteRateCommand from "../../commands/rates/delete.rate.command";

class DeleteRateHandler{
    async execute(command: DeleteRateCommand){
        const rate = await RateRepository.findOneById(command.getId());

        if(!rate){
            throw new Error("Rate not found");
        }

        
        await RateRepository.deleteById(rate.getId());
    }
}
export default new DeleteRateHandler();