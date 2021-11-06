import RateRepository from "../../../infrastructure/repositories/rate.repository";
import UpdateRateCommand from "../../commands/rates/update.rate.command";

class UpdateRateHandler{
    async execute(command:UpdateRateCommand){
        const rate = await RateRepository.findOneById(command.getId());

        if(!rate){
            throw new Error("Not found");
        }

        if (command.getAverageSalary()) {
            if (isNaN(Number(command.getAverageSalary()))) {
                throw new Error("Wrong format for 'averageSalary'");
            } else if (typeof command.getAverageSalary() !== "string") {
                throw new Error("'averageSalary' must be string");
            }
            
            rate.setAverageSalary(command.getAverageSalary());
        } else {
            throw new Error("'averageSalary' is necesary'");
        }

        if (command.getGrossMargin()) {
            if (isNaN(Number(command.getGrossMargin()))) {
                throw new Error("Wrong format for 'grossMargin'");
            } else if (typeof command.getGrossMargin() !== "string") {
                throw new Error("'averageSalary' must be string");
            }
            
            rate.setGrossMargin(command.getGrossMargin());
        } else {
            throw new Error("'grossMargin' is necesary'");
        }

        await RateRepository.update(rate);
    }
}
export default new UpdateRateHandler();