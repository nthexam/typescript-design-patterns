import { Subscription } from '../subscription';
import { SubscriptionState } from './subscription-state';
import { TrialExpiredState } from './trial-expired-state';

export class PaidState extends SubscriptionState {
  amountPaid: number = 0;
  constructor(private _subscription: Subscription, amount: number) {
    super();
    this.amountPaid = amount;
  }

  checkExpiration(): void {
    this.amountPaid = this.amountPaid - 50;
    if (this.amountPaid < 0) {
      this._subscription.state = new TrialExpiredState(this._subscription);
    }
  }

  report(): string {
    return `On paid plan with ${this.amountPaid}$ subscription`;
  }
}
