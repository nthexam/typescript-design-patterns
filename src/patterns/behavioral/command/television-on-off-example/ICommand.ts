// the command interface
export interface Command {
  execute(): any;
  undo(): any;
}
