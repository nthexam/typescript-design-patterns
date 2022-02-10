import { Command } from "./ICommand";
import { Television } from "./Television";

// the televisionoffcommand is a concrete implementation of the command interface
export class TelevisionOffCommand implements Command {
    television: Television;

    constructor(television: Television) {
        this.television = television;
    }

    execute() {
        this.television.off();
    }

    undo() {
        this.television.on();
    }
}
