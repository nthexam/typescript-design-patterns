import { StatsTracker } from './stats-tracker';
import { test } from './test';

export class App {
  public run = () => {
    let tracker = StatsTracker.instance;
    tracker.buttonClicks = 40;
    tracker.facebookShares = 20;
    tracker.twitterShares = 30;
    tracker.widgetViews = 10;
    console.log(tracker);
    tracker.widgetViews++;
    tracker.facebookShares = tracker.facebookShares + 4;
    console.log(tracker);
    test();
  };
}
