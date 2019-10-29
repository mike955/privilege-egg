import { Service } from 'egg';

/**
 * Role Service
 */
export default class Role extends Service {

  public async sayHi(name: string) {
    return `hi, ${name}`;
  }
}
