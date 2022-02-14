import { INewsFeedService } from './INewsFeedService';
import { Post } from './Post';

export class MockNewsFeedService implements INewsFeedService {
  posts: Post[] = [];
  constructor() {
    this.posts = [
      { id: '1', title: 'Test Post 1', body: 'Test Post 1', postedBy: 'Me' },
      { id: '2', title: 'Test Post 2', body: 'Test Post 2', postedBy: 'Me' },
      { id: '3', title: 'Test Post 3', body: 'Test Post 3', postedBy: 'Me' },
      { id: '4', title: 'Test Post 4', body: 'Test Post 4', postedBy: 'Me' }
    ];
  }
  getAll(): Promise<Post[]> {
    return Promise.resolve(this.posts);
  }
  getById(id: number): Promise<Post> {
    throw new Error('Method not implemented.');
  }
  savePost(post: Post): Promise<void> {
    this.posts.push(post);
    return Promise.resolve();
  }
}
