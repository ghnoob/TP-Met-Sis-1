import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";
import UpdateTechnologyCommand from "../../commands/technologies/update.technology.command";

class UpdateTechnologyHandler{
    async execute(command:UpdateTechnologyCommand){
        const technology = await TechnologyRepository.findOneById(command.getId());

        if(!technology){
            throw new Error("Not found");
        }
        technology.setName(command.getName());
        
       
        await TechnologyRepository.save(technology);
    }
}
export default new UpdateTechnologyHandler();