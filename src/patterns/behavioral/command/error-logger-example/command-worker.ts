import { ICommand } from './icommand';

// It will store a series of command where we register and start
export class CommandWorker {
  private _commands: ICommand[] = [];
  private readonly _interval: number;

  constructor(interval: number) {
    this._interval = interval;
    this.startWorker();
  }

  registerCommand(command: ICommand) {
    if (!this._commands.find((c) => c == command)) {
      this._commands.push(command);
    }
  }

  startWorker(): any {
    setInterval(() => {
      let command = this._commands.pop();
      if (command) {
        command.execute();
        // This class does not care about what the command does
        //it just uses the interface definition to execute the function
        // This is what make this pattern super awesome
        // From invoker we just need to pass the right command which of type
        // ICommand and rest we can define logic when and how the command need to be run if
        // it is registered earlier with this class
      }
    }, this._interval);
  }
}
