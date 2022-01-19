import { StatsTracker } from './stats-tracker';
import { test } from './test';

export class Singleton {
  public run = () => {
    let tracker = StatsTracker.instance;
    tracker.buttonClicks = 10;
    tracker.facebookShares = 20;
    tracker.twitterShares = 30;
    tracker.widgetViews = 40;
    console.log('First Change: ', tracker);
    tracker.facebookShares = tracker.facebookShares + 10;
    tracker.widgetViews++;
    test();
    console.log('After Test Change: ', tracker);
  };
}
