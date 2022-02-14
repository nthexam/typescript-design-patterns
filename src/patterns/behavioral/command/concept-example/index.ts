// The Client
// Create a receiver
const RECEIVER = new Receiver(); // same as television in other example

// Create Commands
const COMMAND1 = new Command1(RECEIVER); // Same as on and off commands
const COMMAND2 = new Command2(RECEIVER);

// Register the commands with the invoker
const INVOKER = new Invoker(); // same as remote invoker
INVOKER.register('1', COMMAND1); // same a set command passing the command to set command/register
INVOKER.register('2', COMMAND2);

// Execute the commands that are registered on the Invoker
INVOKER.execute('1');
INVOKER.execute('2');
INVOKER.execute('1');
INVOKER.execute('2');
