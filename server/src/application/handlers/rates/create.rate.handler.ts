import { Rate } from "../../domain/entities/rate.entity";
import rateRepository from "../../infrastructure/repositories/rate.repository"
import {CreateRateCommand} from "../commands/rates/create.command.rates"

class CreateRateHandler {
    async execute(command: CreateRateCommand){
        const rate: Rate = {
            technology: command.technology,
            seniority: command.seniority,
            language: command.language,
            averageSalary: command.averageSalary,
            grossMargin: command.grossMargin,
            currency: command.currency


        };
        await rateRepository.save(rate)
    }
}
export default new CreateRateHandler();