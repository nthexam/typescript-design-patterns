import { Command } from './ICommand';
import { Television } from './Television';

// the televisiononcommand is a concrete implementation of the command interface
export class TelevisionOnCommand implements Command {
  television: Television;

  constructor(television: Television) {
    this.television = television;
  }

  execute() {
    this.television.on();
  }

  undo() {
    this.television.off();
  }
}
