import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";
import DeleteTechnologyCommand from "../../commands/technologies/delete.technology.command";
import TechnologyNotFoundError from "../../customErrors/technologies/technology.not.found.error";

class DeleteTechnologyHandler{
    async execute(command: DeleteTechnologyCommand){
        const technology = await TechnologyRepository.findOneById(command.getId());

        if (!technology) {
            throw new TechnologyNotFoundError();
        }

        await TechnologyRepository.deleteById(technology.getId());
    }
}
export default new DeleteTechnologyHandler();