import { Factory } from './patterns/factory';
import { Singleton } from './patterns/singleton';
import { LooseCoupling } from './principles/loose-coupling';

console.log('\n ##################### SINGELTON PATTERN ################## \n');
let singleton = new Singleton();
singleton.run();

console.log('\n ##################### FACTORY PATTERN ################## \n');

let factory = new Factory();
factory.run();

console.log(
  '\n ##################### PRINCIPLE: LOOSE COUPLING  ################## \n'
);

let looseCoupling = new LooseCoupling();
looseCoupling.run();
