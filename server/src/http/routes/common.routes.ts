import { Router } from 'express';

export default abstract class CommonRoutes {
  private router: Router;
  private name: string;

  /**
   * Creates a new route.
   * @param name Route endpoint.
   */
  constructor(name: string) {
    this.router = Router();
    this.name = name;
  }

  /**
   * Gets route name.
   */
  public getName() {
    return this.name;
  }

  /**
   * Gets router.
   */
  public getRouter() {
    return this.router;
  }

  /**
   * Assigns routes to the router.
   */
  protected abstract setUpRoutes(): Router;
}
