import { CommandWorker } from './command-worker';
import { LogCommand } from './log-command';
import { LogCommandParams } from './LogCommandParams';
import { sleep } from './sleep';

async function testCommandPattern(): Promise<any> {
  // Run the command worker every 5 seconds
  let commandWorker = new CommandWorker(5000);

  while (true) {
    try {
      await sleep(1000);
      let b: any = 100;
      b();
    } catch (err: any) {
      let params: LogCommandParams = {
        title: 'Oops something went wrong',
        body: 'Please try again later',
        error: err,
        filename: './logs/error.log'
      };
      commandWorker.registerCommand(new LogCommand(params));
    }
  }
}

testCommandPattern();
