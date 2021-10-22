import RateRepository from "../../../infrastructure/repositories/rate.repository";
import UpdateCommandRates from "../../commands/update.command.rates";

class UpdateRateHandler{
    async execute(command:UpdateCommandRates){
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