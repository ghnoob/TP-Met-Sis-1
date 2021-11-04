import { Rate } from "../../../domain/entities/rate.entity";
import RateRepository from "../../../infrastructure/repositories/rate.repository";
import CreateRateCommand from "../../commands/rates/create.rate.command";
import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";
import { Technology } from "../../../domain/entities/technology.entity";
import RateAlreadyExistsError from "../../customErrors/rates/rate.already.exists.error";
import RateCurrencyInvalidError from "../../customErrors/rates/rate.currency.invalid.error";
import RateSeniorityInvalidError from "../../customErrors/rates/rate.seniority.invalid.error";
import RateLanguageInvalidError from "../../customErrors/rates/rate.language.invalid.error";
import { SeniorityEnum } from "../../../domain/enums/seniority.enum";
import { LanguageEnum } from "../../../domain/enums/language.enum";
import { CurrencyEnum } from "../../../domain/enums/currency.enum";
import RateTechnologyIdInvalid from "../../customErrors/rates/rate.technology.id.invalid";
import RateInvalidMoneyValueError from "../../customErrors/rates/rate.invalid.money.value.error";

class CreateRateHandler {

    async execute(command: CreateRateCommand) {
        if (!Object.values(SeniorityEnum).includes(command.getSeniority())) {
            throw new RateSeniorityInvalidError();
        }

        if (!Object.values(LanguageEnum).includes(command.getLanguage())) {
            throw new RateLanguageInvalidError();
        }

        if (!Object.values(CurrencyEnum).includes(command.getCurrency())) {
            throw new RateCurrencyInvalidError();
        }

        const technology: Technology | null = await TechnologyRepository.findOneById(command.getTechnology());

        if (!technology) {
            throw new RateTechnologyIdInvalid();
        }

        const existsRate = await RateRepository.exists(
            command.getTechnology(),
            command.getSeniority(),
            command.getLanguage(),
            command.getCurrency(),
        );


        if (existsRate) {
            throw new RateAlreadyExistsError();
        }

        if (isNaN(Number(command.getAverageSalary())) || isNaN(Number(command.getGrossMargin()))) {
            throw new RateInvalidMoneyValueError();
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