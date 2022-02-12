import { ISubscriptionState } from './isubscription-state';
import { TrialSate } from './states/trial-state';

export class Subscription {
  state: ISubscriptionState = new TrialSate(this);

  pay(amount: number) {
    this.state.pay(amount);
  }

  dayPassed() {
    this.state.checkExpiration();
  }

  checkSubscriptionStatus() {
    console.log(this.state.report());
  }
}
