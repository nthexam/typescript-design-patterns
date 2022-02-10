import { IErrorDisplayStrategy } from './ierror-display-strategy';

export class ConsoleErrorDisplayStrategy implements IErrorDisplayStrategy {
  display(title: string, body: string): void {
    console.log(`${title} : ${body}`);
  }
}
