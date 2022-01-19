import { StatsTracker } from './stats-tracker';

export function test() {
  let tracker = StatsTracker.instance;
  tracker.buttonClicks++;
  tracker.facebookShares++;
  tracker.twitterShares++;
  tracker.widgetViews++;
}
