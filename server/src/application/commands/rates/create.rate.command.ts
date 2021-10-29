import { SeniorityEnum } from "../../../domain/enums/seniority.enum";
import { LanguageEnum } from "../../../domain/enums/language.enum";


export default class CreateRateCommand {

    private technology: string;
    private seniority: SeniorityEnum;
    private language: LanguageEnum;
    private averageSalary: string;
    private grossMargin: string;
    private currency: string;

    constructor(
        technology: string,
        seniority: SeniorityEnum,
        language: LanguageEnum,
        averageSalary: string,
        grossMargin: string,
        currency: string
    ) {
        this.technology = technology;
        this.seniority = seniority;
        this.language = language;
        this.averageSalary = averageSalary;
        this.grossMargin = grossMargin;
        this.currency = currency;
    }

    public getTechnology() {
        return this.technology;
    }

    public getSeniority() {
        return this.seniority;
    }

    public getLanguage() {
        return this.language;
    }

    public getAverageSalary() {
        return this.averageSalary;
    }

    public getGrossMargin() {
        return this.grossMargin;
    }

    public getCurrency() {
        return this.currency;
    }
}