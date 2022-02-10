import { ConcreteStrategy3 } from './ConcreteStrategy3';
import { ConcreteStrategy2 } from './ConcreteStrategy2';
import { ConcreteStrategy1 } from './ConcreteStrategy1';
import { Context } from './Context';

export class Strategy {
  public run = () => {
    let context: Context = new Context(new ConcreteStrategy1());
    context.executeStrategy('Hello 1');
    context = new Context(new ConcreteStrategy2());
    context.executeStrategy('Hello 2');

    context = new Context(new ConcreteStrategy3());
    context.executeStrategy(' Hello 3');
  };
}
