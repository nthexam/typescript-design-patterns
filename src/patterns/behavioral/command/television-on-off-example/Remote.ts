import { Command } from './ICommand';

// the remote in this case is the caller
export class Remote {
  onCommand!: Command;
  offCommand!: Command;

  setCommand(onCommand: Command, offCommand: Command) {
    this.onCommand = onCommand;
    this.offCommand = offCommand;
  }

  onButtonClick() {
    this.onCommand.execute();
  }

  offButtonClick() {
    this.offCommand.execute();
  }
}
