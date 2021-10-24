import rateRepository from '../../../infrastructure/repositories/rate.repository';
import FilterCommandRate from '../../commands/filter.command.rates';
import type { Rate } from '../../../domain/entities/rate.entity';

class FilterRateHandler {
    async execute(command: FilterCommandRate): Promise<Rate[]> {
        if (!command.getTechnologies()) {
            throw new Error("technologyIds array must be sent in request body.");
        }

        const filteredRates: Rate[] = await rateRepository.findAllBy(
            command.getTechnologies(),
            command.getSeniority(),
            command.getLanguage(),
            command.getCurrency(),
        );

        return filteredRates;
    }
}

export default new FilterRateHandler();
