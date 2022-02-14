import * as fs from 'fs';
import { INewsFeedService } from './INewsFeedService';
import { Post } from './Post';

export class NewsFeedService implements INewsFeedService {
  private _fileName: string = 'posts.json';
  private _relatvePath = 'src/principles/dependency-inversion/example/';

  getAll(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      fs.readFile(this._relatvePath + this._fileName, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(data));
      });
    });
  }

  getById(id: number): Promise<Post> {
    throw new Error('Method not implemented.');
  }

  savePost(post: Post): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getAll().then((posts: Post[]) => {
        posts.push(post);
        const postValues = JSON.stringify(posts);
        fs.writeFile(this._relatvePath + this._fileName, postValues, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    });
  }
}
