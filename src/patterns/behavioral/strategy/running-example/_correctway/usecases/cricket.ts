import { FavoriteWorkout } from '../ifavourite-workout';

export class Cricket implements FavoriteWorkout {
  public begin(): void {
    console.log('Go play cricket.');
  }
}
