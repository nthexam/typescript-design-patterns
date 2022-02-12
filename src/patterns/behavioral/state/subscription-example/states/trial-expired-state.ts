import { Subscription } from '../subscription';
import { PaidState } from './paid-state';
import { SubscriptionState } from './subscription-state';

export class TrialExpiredState extends SubscriptionState {
  constructor(private _subscription: Subscription) {
    super();
  }

  pay(amount: number): void {
    this._subscription.state = new PaidState(this._subscription, amount);
  }

  checkExpiration(): void {}

  report(): string {
    return 'Trial Has Expired';
  }
}
