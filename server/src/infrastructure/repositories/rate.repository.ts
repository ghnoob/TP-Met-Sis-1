import { Rate } from "../../domain/entities/rate.entity";
import { LanguageEnum } from "../../domain/enums/language.enum";
import { SeniorityEnum } from "../../domain/enums/seniority.enum";


class RateRepository {
    private rates: Rate[];

    constructor() {
        this.rates = [];
    }

    async findOneById(id: string): Promise<Rate | null> {
        const rate = this.rates.find(r => r.getId() === id);

        return (rate) ? rate : null;
    }

    async findAll(): Promise<Rate[]> {
        return this.rates;
    }

    async save(rate: Rate): Promise<void> {
        this.rates.push(rate);
    }

    async deleteById(id: string): Promise<void> {
        this.rates = this.rates.filter(r => r.getId() !== id);
    }

    async findAllBy(
        technologyIds?: string[],
        seniority?: SeniorityEnum,
        language?: LanguageEnum,
        currency?: string
    ): Promise<Rate[]> {
        let rates = this.rates;

        if (technologyIds) {
            this.rates = this.rates.filter(r => technologyIds.includes(r.getTechnology().getId()));
        }

        if (seniority) {
            rates = rates.filter(r => r.getSeniority() == seniority);
        }

        if (language) {
            rates = rates.filter(r => r.getLanguage() == language);
        }

        if (currency) {
            rates = rates.filter(r => r.getCurrency() == currency);
        }

        return rates;
    }

    async exists(technologyId: string, seniority: SeniorityEnum, language: LanguageEnum, currency: string) : Promise<boolean> {

        const exists = this.rates.some((element) => {
            return element.getTechnology().getId() == technologyId &&
                element.getSeniority() == seniority &&
                element.getLanguage() == language &&
                element.getCurrency() == currency
        });

        return exists;
    }
}

export default new RateRepository();
