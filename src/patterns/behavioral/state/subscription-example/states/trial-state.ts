import { Subscription } from '../subscription';
import { PaidState } from './paid-state';
import { SubscriptionState } from './subscription-state';
import { TrialExpiredState } from './trial-expired-state';

export class TrialSate extends SubscriptionState {
  daysRemaining: number = 14;

  constructor(private _subscription: Subscription) {
    super();
  }

  pay(amount: number): void {
    this._subscription.state = new PaidState(this._subscription, amount);
  }

  checkExpiration(): void {
    this.daysRemaining--;
    if (this.daysRemaining <= 0) {
      this._subscription.state = new TrialExpiredState(this._subscription);
    }
  }

  report(): string {
    return `${this.daysRemaining} days are left in trial`;
  }
}
