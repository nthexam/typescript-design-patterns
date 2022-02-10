import { Strategy } from './IStrategy';

export class Context {
  private _strategy: Strategy;

  constructor(strategy: Strategy) {
    this._strategy = strategy;
  }

  // So whatever strategy You pass in run time it will be executed.
  public executeStrategy(name: string): void {
    this._strategy.execute(name);
  }
}
