import { GameCharacterFactory } from './game-character-factory';

export class Factory {
  public run = () => {
    const warrior = GameCharacterFactory.getWarrior(10);
    const mage = GameCharacterFactory.getMage(20);

    console.log('Warriro', warrior);
    console.log('Mage', mage);
  };
}
