import { GameCharacter } from '../factory/game-character';
import { GameCharacterFactory } from '../factory/game-character-factory';

export class GameCharactersPool {
  private _warriorPool: GameCharacter[] = [];
  private _mazesPool: GameCharacter[] = [];

  static WARRIORS_POOL_SIZE = 20;
  static MAGES_POOL_SIZE = 10;

  constructor(private level: number) {
    this.loadWarriorPool();
    this.loadMagesPool();
  }

  private loadWarriorPool() {
    for (let i = 0; i < GameCharactersPool.WARRIORS_POOL_SIZE; i++) {
      this._warriorPool.push(GameCharacterFactory.getWarrior(this.level));
    }
  }

  private loadMagesPool() {
    for (let i = 0; i < GameCharactersPool.MAGES_POOL_SIZE; i++) {
      this._mazesPool.push(GameCharacterFactory.getMage(this.level));
    }
  }

  private getPoolItem<T>(pool: T[], releadFn: () => void): T {
    let item: T = pool.pop() as T;
    console.log(pool.length);
    if (!pool.length) {
      console.log('Now reloadng the function ', releadFn);
      releadFn();
    }
    return item;
  }

  public getWarrior(): GameCharacter {
    return this.getPoolItem(this._warriorPool, this.loadWarriorPool.bind(this));
  }

  public getMazes() {
    return this.getPoolItem(this._mazesPool, this.loadMagesPool.bind(this));
  }
}
