import { Rate } from "../../../domain/entities/rate.entity";
import RateRepository from "../../../infrastructure/repositories/rate.repository";
import CreateRateCommand from "../../commands/rates/create.rate.command";
import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";
import { Technology } from "../../../domain/entities/technology.entity";

class CreateRateHandler {

    async execute(command: CreateRateCommand){

        const technology: Technology | null = await TechnologyRepository.findOneById(command.getTechnology());

        if (!technology) {
            throw new Error("Technology not found");
        }

        const existsRate = await RateRepository.exists(
            technology.getId(),
            command.getSeniority(), 
            command.getLanguage(), 
            command.getCurrency()
            );


        if (!existsRate) {
            throw new Error("Rate not found");
        }


        const rate: Rate = new Rate(
            technology, 
            command.getSeniority(), 
            command.getLanguage(), 
            command.getAverageSalary(), 
            command.getGrossMargin(), 
            command.getCurrency()
        );

        await RateRepository.save(rate)
    }
}
export default new CreateRateHandler();