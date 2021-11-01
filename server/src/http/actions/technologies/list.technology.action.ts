import { Request, Response } from "express";
import technologyRepository from "../../../infrastructure/repositories/technology.repository";

class ListTechnologyAction {
    async run(_req: Request, res: Response) {
        const technologies = await technologyRepository.findAll();

        return res.status(200).json(technologies);
    }
}

export default new ListTechnologyAction();