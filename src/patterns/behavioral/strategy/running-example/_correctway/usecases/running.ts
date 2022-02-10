import { FavoriteWorkout } from '../ifavourite-workout';

export class Running implements FavoriteWorkout {
  public begin(): void {
    console.log('Go running on the park.');
  }
}
