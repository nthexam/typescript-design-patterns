import { IExportPostService } from './iexport-interface';
import { Post } from './post';

export interface IPostService {
  getAll(): Promise<Post[]>;
  save(post: Post): Promise<void>;
  export(service: IExportPostService): Promise<string>;
}
