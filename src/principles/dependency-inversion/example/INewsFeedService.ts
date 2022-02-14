import { Post } from './Post';


export interface INewsFeedService {
  getAll(): Promise<Post[]>;
  getById(id: number): Promise<Post>;
  savePost(post: Post): Promise<void>;
}
