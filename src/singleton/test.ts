import { StatsTracker } from './stats-tracker';

export function test() {
  let tracker = StatsTracker.instance;
  console.log('Inside Test 1:', tracker);
}
