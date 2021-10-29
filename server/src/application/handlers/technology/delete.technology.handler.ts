import TechnologyRepository from "../../../infrastructure/repositories/rate.repository";
import DeleteTechnologyCommand from "../../commands/rates/delete.rate.command";

class DeleteTechnologyHandler{
    async execute(command: DeleteTechnologyCommand){
        const technology = await TechnologyRepository.findOneById(command.getId());

        if(!technology){
            throw new Error("Not found");
        }

        
        await TechnologyRepository.deleteById(technology.getId());
    }
}
export default new DeleteTechnologyHandler();