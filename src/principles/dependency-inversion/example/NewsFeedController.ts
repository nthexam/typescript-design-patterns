import { v4 as uuidv4 } from 'uuid';
import { INewsFeedService } from './INewsFeedService';
import { Post } from './Post';


export class NewsFeedController {
  constructor(private newsService: INewsFeedService) { }

  async getAllPosts() {
    const posts = await this.newsService.getAll();

    posts.forEach((post: Post) => {
      console.log(`Title     : ${post.title} \nBody      : ${post.body}  \nPosted By : ${post.postedBy}`);
      console.log('\n\n');
    });
  }

  async savePost(post: Post) {
    post = {
      ...post,
      id: uuidv4()
    };
    await this.newsService.savePost(post);
    console.log('Data is posted successfully');
  }
}
