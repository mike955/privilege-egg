import { Service } from 'egg';

/**
 * Privilege Service
 */
export default class Privilege extends Service {

  public async sayHi(name: string) {
    return `hi, ${name}`;
  }
}
