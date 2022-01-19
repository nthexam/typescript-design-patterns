import { Post } from './post';

export interface IExportPostService {
  export(post: Post[]): string;
}
