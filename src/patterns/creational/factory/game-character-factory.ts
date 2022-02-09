import { GameCharacter } from './game-character';

export class GameCharacterFactory {
  public static getWarrior(level: number): GameCharacter {
    let warrior: GameCharacter;
    if (level < 10) {
      warrior = {
        strength: 10,
        dextrity: 1,
        health: 12,
        magic: 34
      };
    } else {
      warrior = {
        strength: 20,
        dextrity: 13,
        health: 32,
        magic: 74
      };
    }
    return warrior;
  }
  public static getMage(level: number): GameCharacter {
    let mage: GameCharacter;
    if (level < 10) {
      mage = {
        strength: 1,
        dextrity: 12,
        health: 1,
        magic: 3
      };
    } else {
      mage = {
        strength: 34,
        dextrity: 33,
        health: 25,
        magic: 43
      };
    }
    return mage;
  }
}
