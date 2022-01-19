import { IPostService } from './ipost-service';
import { Post } from './post';
import * as fs from 'fs';
import { IExportPostService } from './iexport-interface';

export class PostService implements IPostService {
  private _filName: string = __dirname + '/posts.json';

  async export(service: IExportPostService): Promise<string> {
    const posts = await this.getAll();
    return service.export(posts);
  }

  getAll(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      fs.readFile(this._filName, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        }
        if (data) {
          resolve(JSON.parse(data));
        }
      });
    });
  }

  save(post: Post): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getAll().then((posts) => {
        posts.push(post);
        const data = JSON.stringify(posts);
        fs.writeFile(this._filName, data, (err) => {
          if (err) {
            reject();
          }
          resolve();
        });
      });
    });
  }
}
