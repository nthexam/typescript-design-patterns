import { ErrorHandler } from './error-handler';
import { ConsoleErrorDisplayStrategy } from './console-error-display-strategy';
import { FileErrorLoggingStrategy } from './file-error-logging-strategy';

export class StrategyErrorLogging {
  public run = () => {
    let errorHandler = new ErrorHandler(
      new ConsoleErrorDisplayStrategy(),
      new FileErrorLoggingStrategy()
    );

    try {
      let b: any = 2;
      b();
    } catch (err: any) {
      errorHandler.handle(
        err,
        'Something went wrong',
        'Please try again later'
      );
    }
  };
}
