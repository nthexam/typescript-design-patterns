import { StatsTracker } from './stats-tracker';

export function test() {
  const tracker = StatsTracker.instance;
  tracker.buttonClicks++;
  tracker.facebookShares++;
  tracker.twitterShares++;
  tracker.widgetViews++;
}
