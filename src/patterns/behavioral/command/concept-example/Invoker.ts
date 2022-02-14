class Invoker {
  // The Invoker Class
  #commands: { [id: string]: ICommand };

  constructor() {
    this.#commands = {};
  }

  register(commandName: string, command: ICommand) {
    // Register commands in the Invoker
    this.#commands[commandName] = command;
  }

  execute(commandName: string) {
    // Execute any registered commands
    if (commandName in this.#commands) {
      this.#commands[commandName].execute();
    } else {
      console.log(`Command [${commandName}] not recognised`);
    }
  }
}
