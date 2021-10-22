import { Rate } from "../../../domain/entities/rate.entity";
import RateRepository from "../../../infrastructure/repositories/rate.repository";
import CreateCommandRates from "../../commands/create.command.rates";
import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";

class CreateRateHandler {
    async execute(command: CreateCommandRates){
        const rate: Rate = {
            technology: command.getTechnology(),
            seniority: command.getSeniority(),
            language: command.getLanguage(),
            averageSalary: command.getAverageSalary(),
            grossMargin: command.getGrossMargin(),
            currency: command.getCurrency()
        };
        await RateRepository.save(rate)
    }
}
export default new CreateRateHandler();