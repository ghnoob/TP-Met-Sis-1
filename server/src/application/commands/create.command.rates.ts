import { Technology } from "../../domain/entities/technology.entity";
import { SeniorityEnum } from "../../domain/enums/seniority.enum";
import { LanguageEnum } from "../../domain/enums/languaje.enum";


export default class CreateCommandRates {

    private technology: Technology;
    private seniority: SeniorityEnum;
    private language: LanguageEnum;
    private averageSalary: string;
    private grossMargin: string;
    private currency: string;

    constructor(
        technology: Technology,
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

    public set Technology(technology: Technology) {
        this.technology = technology;
    }

    public set Seniority(seniority: SeniorityEnum) {
        this.seniority = seniority;
    }

    public set Language(language: LanguageEnum) {
        this.language = language;
    }

    public set AverageSalary(averageSalary: string) {
        this.averageSalary = averageSalary;
    }

    public set GrossMargin(grossMargin: string) {
        this.grossMargin = grossMargin;
    }

    public set Currency(currency: string) {
        this.currency = currency;
    }
}