import RateRepository from "../../../infrastructure/repositories/rate.repository";
import DeleteRateCommand from "../../commands/rates/delete.rate.command";

class UpdateRateHandler{
    async execute(command: DeleteRateCommand){
        const rate = await RateRepository.findOneById(command.getId());

        if(!rate){
            throw new Error("Not found");
        }

        
        await RateRepository.deleteById(rate.getId());
    }
}
export default new UpdateRateHandler();