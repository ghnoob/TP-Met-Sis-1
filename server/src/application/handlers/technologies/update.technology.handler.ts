import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";
import UpdateTechnologyCommand from "../../commands/technologies/update.technology.command";
import TechnologyAlreadyExistsError from "../../customErrors/technologies/technology.already.exists.error";
import TechnologyNotFoundError from "../../customErrors/technologies/technology.not.found.error";

class UpdateTechnologyHandler{
    async execute(command:UpdateTechnologyCommand){
        const technology = await TechnologyRepository.findOneById(command.getId());

        if (!technology) {
            throw new TechnologyNotFoundError();
        }

        if (await TechnologyRepository.findOneByName(command.getName())) {
            throw new TechnologyAlreadyExistsError();
        }

        technology.setName(command.getName());
    }
}
export default new UpdateTechnologyHandler();