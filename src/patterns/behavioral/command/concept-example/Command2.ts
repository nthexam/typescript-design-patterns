class Command2 implements ICommand {
  // A Command object, that implements the ICommand interface and
  // runs the command on the designated receiver
  #receiver: Receiver;

  constructor(receiver: Receiver) {
    this.#receiver = receiver;
  }

  execute() {
    this.#receiver.runCommand2();
  }
}
