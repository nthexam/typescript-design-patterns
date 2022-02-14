import { INewsFeedService } from './INewsFeedService';
import { NewsFeedController } from './NewsFeedController';
import { NewsFeedService } from './NewsFeedService';

const main = async () => {
  const newsService: INewsFeedService = new NewsFeedService();
  const newsController = new NewsFeedController(newsService);
  await newsController.getAllPosts();
  await newsController.savePost({
    title: 'DI SOLID principle',
    body: 'Dependency Inversion is one of the ways to manage the dependencies of your application.',
    postedBy: 'Atul Joshi'
  });
  await newsController.getAllPosts();
};

main();

