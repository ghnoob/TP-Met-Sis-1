import RateRepository from "../../../infrastructure/repositories/rate.repository";
import UpdateRateCommand from "../../commands/rates/update.rate.command";

class UpdateRateHandler{
    async execute(command:UpdateRateCommand){
        const rate = await RateRepository.findOneById(command.getId());

        if(!rate){
            throw new Error("Not found");
        }
        rate.setAverageSalary(command.getAverageSalary());
        rate.setGrossMargin(command.getGrossMargin());
       
        await RateRepository.save(rate);
    }
}
export default new UpdateRateHandler();