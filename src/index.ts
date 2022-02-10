import { StrategyErrorLogging } from './patterns/behavioral/strategy/eror-logging-multiple-strategy';

const strategy = new StrategyErrorLogging();
strategy.run();
