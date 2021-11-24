import shortid from 'shortid';

export class Technology {
  private id: string;
  private name: string;

  constructor(name: string) {
    this.id = shortid.generate();
    this.name = name;
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }
}
