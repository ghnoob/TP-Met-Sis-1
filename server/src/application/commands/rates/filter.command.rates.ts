import { SeniorityEnum } from "../../domain/enums/seniority.enum";
import { LanguageEnum } from "../../domain/enums/languaje.enum";


export default class FilterCommandRates {

    private technologies: string[];
    private seniority?: SeniorityEnum;
    private language?: LanguageEnum;
    private currency?: string;

    constructor(
        technologies: string[],
        seniority?: SeniorityEnum,
        language?: LanguageEnum,
        currency?: string
    ) {
        this.technologies = technologies;
        this.seniority = seniority;
        this.language = language;
        this.currency = currency;
    }

    public getTechnologies() {
        return this.technologies;
    }

    public getSeniority() {
        return this.seniority;
    }

    public getLanguage() {
        return this.language;
    }

    public getCurrency() {
        return this.currency;
    }
}
