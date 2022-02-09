export class StatsTracker {
  buttonClicks = 0;
  facebookShares = 0;
  twitterShares = 0;
  widgetViews = 0;

  constructor() {
    if (StatsTracker._instance) {
      throw new Error('Cannot initialise singleton class using new');
    }
    StatsTracker._instance = this;
  }

  private static _instance: StatsTracker = new StatsTracker();

  public static get instance(): StatsTracker {
    return StatsTracker._instance;
  }
}
