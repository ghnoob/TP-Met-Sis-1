import { Service } from 'typedi';
import ExpressService from '../domain/services/express.service';

/**
 * Main class for the application.
 */
@Service()
export default class Application {
  constructor(private readonly server: ExpressService) {}

  /**
   * Starts the application.
   */
  bootstrap() {
    this.server.listen(Number(process.env.SERVER_PORT) ?? 3000);
  }
}
