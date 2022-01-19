import { IExportPostService } from './iexport-interface';
import { IPostService } from './ipost-service';
import { Post } from './post';

export class MockPostService implements IPostService {
  posts: Post[] = [];

  constructor() {
    this.posts = [
      { id: 1, title: 'Test Post 1', body: 'Test body 1', postedBy: 'Me1' },
      { id: 2, title: 'Test Post 2', body: 'Test body 2', postedBy: 'Me2' },
      { id: 3, title: 'Test Post 3', body: 'Test body 3', postedBy: 'Me3' },
      { id: 4, title: 'Test Post 4', body: 'Test body 4', postedBy: 'Me4' }
    ];
  }

  async export(service: IExportPostService): Promise<string> {
    const posts = await this.getAll();
    return service.export(posts);
  }

  getAll(): Promise<Post[]> {
    return Promise.resolve(this.posts);
  }

  save(post: Post): Promise<void> {
    this.posts.push(post);
    return Promise.resolve();
  }
}
