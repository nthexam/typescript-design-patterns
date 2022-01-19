import { JsonExportService } from './json-export-service';
// import { MockPostService } from './mock-post-service';
import { PostService } from './post-service';

export class LooseCoupling {
  public run = () => {
    const mockService = new PostService();

    mockService.export(new JsonExportService()).then((result) => {
      console.log(result);
    });
  };
}

/**
 * First Way:
 *  Checking with news feed instead of directly calling the  the mockservice method
 * import { MockPostService } from './mock-post-service';
import { NewsFeed } from './news-feed';

export class LooseCoupling {
  public run = () => {
    let newsfeed = new NewsFeed(new MockPostService());
    newsfeed.show();
  };
}
 * 
 */
