import { Request, Response } from 'express';
import { Service } from 'typedi';
import ActionInterface from '../action.interface';
import technologyRepository from '../../../infrastructure/repositories/technology.repository';

@Service()
export default class ListTechnologyAction implements ActionInterface {
  async run(_req: Request, res: Response): Promise<Response> {
    const technologies = await technologyRepository.findAll();

    return res.status(200).json(technologies);
  }
}
