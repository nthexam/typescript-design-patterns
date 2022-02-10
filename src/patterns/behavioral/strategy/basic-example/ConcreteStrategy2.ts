import { Strategy } from './IStrategy';


export class ConcreteStrategy2 implements Strategy {
  public execute(name: string): void {
    console.log('`execute` method of ConcreteStrategy2 is being called' + name);
  }
}
