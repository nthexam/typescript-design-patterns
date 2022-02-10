import { IErrorLoggingStrategy } from './ierror-logging-strategy';
import fs from 'fs';

export class FileErrorLoggingStrategy implements IErrorLoggingStrategy {
  log(err: Error): Promise<any> {
    return new Promise((resolve, reject) => {
      fs.appendFile(
        './src/patterns/behavioral/strategy/eror-logging-multiple-strategy/logs/error.log',
        `${err}\n`,
        'utf8',
        (error) => {
          if (error) {
            console.error('Error Logging failed');
            reject(error);
          } else {
            resolve(true);
          }
        }
      );
    });
  }
}
