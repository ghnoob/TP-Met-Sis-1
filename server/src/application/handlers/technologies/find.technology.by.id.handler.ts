import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";
import TechnologyNotFoundError from "../../customErrors/technologies/technology.not.found.error";
import FindTechnologyByIdCommand from "../../commands/technologies/find.technology.by.id.command";
import { Technology } from "../../../domain/entities/technology.entity";

class DeleteTechnologyHandler{
    async execute(command: FindTechnologyByIdCommand): Promise<Technology> {
        const technology = await TechnologyRepository.findOneById(command.getId());

        if (!technology) {
            throw new TechnologyNotFoundError();
        }

        return technology;
    }
}
export default new DeleteTechnologyHandler();
