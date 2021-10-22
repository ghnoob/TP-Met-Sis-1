import { Rate } from "../../domain/entities/rate.entity";
import { LanguageEnum } from "../../domain/enums/languaje.enum";
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
        if (!rate.getId()) {
            this.rates.push(rate);
        } else {
            this.rates = this.rates.map(function(r) {
                return r.getId() === rate.getId() ? rate : r; 
            });
        }
    }

    async deleteById(id: string): Promise<void> {
        this.rates = this.rates.filter(r => r.getId() !== id);
    }

    async findAllBy(technologyId: string, seniority?: SeniorityEnum, language?: LanguageEnum, currency?: string): Promise<Rate[] | null> {
        let rates = this.rates.filter(r => r.getTechnology().getId() === technologyId);

        if (seniority) {
            rates.filter(r => r.getSeniority() == seniority)
        };
        if (language) {
            rates.filter(r => r.getLanguage() == language)
        };
        if (currency) {
            rates.filter(r => r.getCurrency() == currency)
        };

        return (rates) ? rates : null;
    }

    async exists(technologyId: string, seniority: SeniorityEnum, language: LanguageEnum, currency: string) : Promise<boolean> {

        const exists = this.rates.some((element) => {
            element.getTechnology().getId() == technologyId &&
            element.getSeniority() == seniority &&
            element.getLanguage() == language &&
            element.getCurrency() == currency
        });
        
        return exists;
    }
}

export default new RateRepository();
