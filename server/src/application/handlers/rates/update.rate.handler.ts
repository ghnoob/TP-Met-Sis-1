import RateRepository from "../../../infrastructure/repositories/rate.repository";
import UpdateRateCommand from "../../commands/rates/update.rate.command";

class UpdateRateHandler{
    async execute(command:UpdateRateCommand){
        const rate = await RateRepository.findOneById(command.getId());

        if(!rate){
            throw new Error("Not found");
        }

        if(
        rate.getTechnology().getId() != command.getTechnology() ||
        rate.getSeniority() != command.getSeniority() ||
        rate.getCurrency() != command.getCurrency()
        ) 
        {
            throw new Error("You can only modify 'averageSalary' and 'grossMargin'.");
        }


        rate.setAverageSalary(command.getAverageSalary());
        rate.setGrossMargin(command.getGrossMargin());
       
        await RateRepository.update(rate);
    }
}
export default new UpdateRateHandler();