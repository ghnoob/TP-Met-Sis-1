import CreateTechnologyCommand from './create.technology.command';

export default class UpdateTechnologyCommand extends CreateTechnologyCommand {
  private id: string;

  constructor(id: string, name: string) {
    super(name);
    this.id = id;
  }

  public getId() {
    return this.id;
  }
}
