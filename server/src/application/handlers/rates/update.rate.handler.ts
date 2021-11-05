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
        rate.getCurrency() != command.getCurrency() ||
        rate.getLanguage() != command.getLanguage()
        ) 
        {
            throw new Error("You can only modify 'averageSalary' and 'grossMargin'.");
        }

        if (command.getAverageSalary()) {
            if (isNaN(Number(command.getAverageSalary()))) {
                throw new Error("Wrong format for 'averageSalary'");
            }
            
            rate.setAverageSalary(command.getAverageSalary());
        } else {
            throw new Error("'averageSalary' is necesary'");
        }

        if (command.getGrossMargin()) {
            if (isNaN(Number(command.getGrossMargin()))) {
                throw new Error("Wrong format for 'grossMargin'");
            }
            
            rate.setGrossMargin(command.getGrossMargin());
        } else {
            throw new Error("'grossMargin' is necesary'");
        }

        await RateRepository.update(rate);
    }
}
export default new UpdateRateHandler();