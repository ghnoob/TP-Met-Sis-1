import { Technology } from "../../../domain/entities/technology.entity";
import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";
import CreateTechnologyCommand from "../../commands/technologies/create.technology.command";
import TechnologyAlreadyExistsError from "../../customErrors/technologies/technology.already.exists.error";
import TechnologyNameNotSpecifiedError from "../../customErrors/technologies/technology.name.not.specified.error";


class CreateTechologyHandler {

    async execute(command: CreateTechnologyCommand){
        if (!command.getName()) {
            throw new TechnologyNameNotSpecifiedError();
        }

        if (await TechnologyRepository.findOneByName(command.getName())){
            throw new TechnologyAlreadyExistsError();
        }

        const technology : Technology = new Technology(command.getName());

        await TechnologyRepository.save(technology);


    }
}
export default new CreateTechologyHandler();