import { Strategy } from './IStrategy';

export class ConcreteStrategy3 implements Strategy {
  public execute(name: string): void {
    console.log('`execute` method of ConcreteStrategy3 is being called' + name);
  }
}
