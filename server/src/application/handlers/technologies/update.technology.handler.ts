import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";
import UpdateTechnologyCommand from "../../commands/technologies/update.technology.command";

class UpdateTechnologyHandler{
    async execute(command:UpdateTechnologyCommand){
        const technology = await TechnologyRepository.findOneById(command.getId());

        if (!technology) {
            throw new Error("Not found");
        }

        if (!command.getName()) {
            throw new Error("Name not specified");
        }

        if (await TechnologyRepository.findOneByName(command.getName().toLowerCase())) {
            throw new Error("Technology already exists")
        }

        technology.setName(command.getName().toLowerCase());
    }
}
export default new UpdateTechnologyHandler();