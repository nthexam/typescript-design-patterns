import { ISubscriptionState } from '../isubscription-state';

export abstract class SubscriptionState implements ISubscriptionState {
  pay(amount: number): void {
    throw new Error('Method not implemented.');
  }
  checkExpiration(): void {
    throw new Error('Method not implemented.');
  }
  report(): string {
    throw new Error('Method not implemented.');
  }
}
