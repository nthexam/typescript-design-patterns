enum FavouritWorkout {
  Runnning,
  Cricket,
  Gym
}

class Person {
  public name: string;
  public favouritWorkout: FavouritWorkout;
  constructor(name: string, favouritWorkout: FavouritWorkout) {
    this.name = name;
    this.favouritWorkout = favouritWorkout;
  }

  workout(): void {
    console.log(`${this.name} decides to: `);
    if (this.favouritWorkout == FavouritWorkout.Cricket) {
      console.log(' Playing cricket');
    } else if (this.favouritWorkout == FavouritWorkout.Gym) {
      console.log(' Gym');
    } else if (this.favouritWorkout == FavouritWorkout.Runnning) {
      console.log(' Running ');
    }
  }
}

export class StrategyRunning {
  public run = () => {
    const Josh = new Person('Josh', FavouritWorkout.Cricket);
    Josh.workout(); // Josh decided to: Play soccer with friends.
  };
}
