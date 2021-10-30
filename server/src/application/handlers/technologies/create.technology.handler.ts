import { Technology } from "../../../domain/entities/technology.entity";
import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";
import CreateTechnologyCommand from "../../commands/technologies/create.technology.command";


class CreateTechologyHandler {

    async execute(command: CreateTechnologyCommand){
         
        
        if(await TechnologyRepository.findOneByName(command.getName())){
            throw new Error("Technology already exists");
        }

        const technology : Technology = new Technology(command.getName().toLowerCase());

        await TechnologyRepository.save(technology);


    }
}
export default new CreateTechologyHandler();