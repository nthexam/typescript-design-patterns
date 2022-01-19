import { GameCharacterFactory } from './game-character-factory';

export class Factory {
  public run = () => {
    let warrior = GameCharacterFactory.getWarrior(10);
    let mage = GameCharacterFactory.getMage(20);

    console.log('Warriro', warrior);
    console.log('Mage', mage);
  };
}
