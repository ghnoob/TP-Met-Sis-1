import { Router } from 'express';

export default abstract class CommonRoutes {
  private router: Router;
  private name: string;

  constructor(name: string) {
    this.router = Router();
    this.name = name;
    this.setUpRoutes();
  }

  public getName() {
    return this.name;
  }

  public getRouter() {
    return this.router;
  }

  abstract setUpRoutes(): Router;
}
