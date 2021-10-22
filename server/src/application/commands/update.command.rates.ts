import { SeniorityEnum } from "../../domain/enums/seniority.enum";
import { LanguageEnum } from "../../domain/enums/languaje.enum";


export default class UpdateCommandRates {
    private id: string;
    private technology: string;
    private seniority: SeniorityEnum;
    private language: LanguageEnum;
    private averageSalary: string;
    private grossMargin: string;
    private currency: string;

    constructor(
        id: string,
        technology: string,
        seniority: SeniorityEnum,
        language: LanguageEnum,
        averageSalary: string,
        grossMargin: string,
        currency: string
    ) {
        this.id = id;
        this.technology = technology;
        this.seniority = seniority;
        this.language = language;
        this.averageSalary = averageSalary;
        this.grossMargin = grossMargin;
        this.currency = currency;
    }

    public getId() {
        return this.id;
    }

    public getTechnology(){
        return this.technology;
    }

    public getSeniority(){
        return this.seniority;
    }

    public getLanguage(){
        return this.language;
    }

    public getAverageSalary(){
        return this.averageSalary;
    }

    public getGrossMargin(){
        return this.grossMargin;
    }

    public getCurrency(){
        return this.currency;
    }
}