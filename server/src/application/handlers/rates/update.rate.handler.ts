import rateRepository from "../../infrastructure/repositories/rate.repository";
import {UpdateRateCommand} from "../commands/update.rate.command"

class UpdateRateHandler{
    async execute(command:UpdateRateCommand){
        const rate = await rateRepository.findOneById(command.id);

        if(!rate){
            throw new Error("Not found");
        }

        rate.technology = command.technology;
        rate.seniority = command.seniority;
        rate.language = command.language;
        rate.averageSalary = command.averageSalary;
        rate.grossMargin = command.grossMargin;
        rate.currency = command.currency;
       
        await rateRepository.save(rate);
    }
}
export default new UpdateRateHandler();