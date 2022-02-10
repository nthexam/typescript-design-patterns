import { FavoriteWorkout } from '../ifavourite-workout';

export class Gym implements FavoriteWorkout {
  public begin(): void {
    console.log('Go workout in gym with trainer.');
  }
}
