import { Cricket } from './_correctway/usecases/cricket';
import { PersonWorkout } from './_correctway/workout';

export class StrategyRunning {
  public run = () => {
    const Josh = new PersonWorkout('Josh', new Cricket());
    Josh.workout(); // Josh decided to: Play soccer with friends.
  };
}
