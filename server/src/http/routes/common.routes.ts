import { Router } from 'express';

export default abstract class CommonRoutes {
  private router: Router;
  private name: string;

  constructor(name: string) {
    this.router = Router();
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public getRouter() {
    return this.router;
  }

  protected abstract setUpRoutes(): Router;
}
