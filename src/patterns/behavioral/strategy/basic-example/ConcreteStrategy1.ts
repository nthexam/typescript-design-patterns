import { Strategy } from './IStrategy';

export class ConcreteStrategy1 implements Strategy {
  public execute(name: string): void {
    console.log(
      '`execute` method of ConcreteStrategy1 is being called :' + name
    );
  }
}
