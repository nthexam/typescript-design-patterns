import { Factory } from './patterns/creational/factory';

import { LooseCoupling } from './principles/loose-coupling';
import { DIPattern } from './patterns/creational/dependency-injection';
import { Singleton } from './patterns/creational/singleton';
import { ObjectPoolPattern } from './patterns/creational/object-pool';
import { Adapter } from './patterns/structural/adapter';
import { Composite } from './patterns/structural/composit';

console.log('\n ##################### SINGELTON PATTERN ################## \n');
const singleton = new Singleton();
singleton.run();

console.log('\n ##################### FACTORY PATTERN ################## \n');

const factory = new Factory();
factory.run();

console.log(
  '\n ##################### PRINCIPLE: LOOSE COUPLING  ################## \n'
);

const looseCoupling = new LooseCoupling();
looseCoupling.run();

console.log(
  '\n ##################### PATTERN: OBJECT POOL PATTERN  ################## \n'
);

const objectPool = new ObjectPoolPattern();
objectPool.run();

console.log('\n ##################### PATTERN: DI ################## \n');

const di = new DIPattern();
di.run();

console.log('\n ##################### ADAPTER PATTERN ################## \n');

const adapter = new Adapter();
adapter.run();

console.log('\n ##################### COMPOSITE PATTERN ################## \n');

const composite = new Composite();
composite.run();
