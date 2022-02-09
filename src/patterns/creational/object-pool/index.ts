import { GameCharactersPool } from './game-characters-pool';

export class ObjectPoolPattern {
  public run = () => {
    let level = 13;

    let pool = new GameCharactersPool(level);

    for (let i = 0; i < 40; i++) {
      console.log(i + 1);
      console.log(pool.getMazes());
    }
  };
}
