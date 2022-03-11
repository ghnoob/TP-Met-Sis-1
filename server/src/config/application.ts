import { Service } from 'typedi';
import ExpressService from '../infrastructure/services/express.service';

@Service()
export default class Application {
  constructor(private readonly server: ExpressService) {}

  bootstrap() {
    this.server.listen(3000);
  }
}
