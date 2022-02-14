namespace DICorrect {
  abstract class CustomError {
    error: Error;
    errorMessage!: string;
    constructor(error: Error) {
      this.error = error;
    }
    abstract createErrorMessage(): void;
    abstract logError(): void;
  }

  export class ConnectionError extends CustomError {
    constructor(error: Error) {
      super(error);
    }
    createErrorMessage(): void {
      this.errorMessage = `Connection error: ${this.error.message}`;
    }
    logError(): void {
      console.log(this.errorMessage);
    }
  }

  class AlertSystem {
    public sendAlert(message: string) {
      console.log('Alert sent');
    }
  }

  export class DBError extends CustomError {
    constructor(error: Error) {
      super(error);
    }

    createErrorMessage(): void {
      this.errorMessage = `DB error: ${this.error.message}`;
    }

    logError(): void {
      console.log(this.errorMessage);
      const alert = new AlertSystem();
      alert.sendAlert(this.errorMessage);
    }
  }

  abstract class LoggerService {
    createLog!: (logObject: object) => void;
  }

  class GrayLoggerService implements LoggerService {
    createLog(logObject: object) {
      const grayLog = new GrayLog();
      grayLog.saveLog(logObject);
    }
  }

  class RedisLoggerService implements LoggerService {
    createLog(logObject: object) {
      const logMessage = JSON.stringify(logObject);
      const redisLog = new RedisLog();
      redisLog.sendLog(logMessage);
    }
  }

  //   const errorDecorator = (customError: CustomError) => {
  //     customError.createErrorMessage();
  //     customError.logError();
  //   };

  //   const main = () => {
  //     const dbError = new DBError(new Error('DB err1'));
  //     errorDecorator(dbError);
  //   };

  class RedisLog {
    sendLog(logMessage: string) {
      console.log(`Log Sent to Redis for logMessage`);
    }
  }

 const errorDecorator = (error: Error, loggerService: LoggerService) => {
   loggerService.createLog(error);
 };

 const main = () => {
   errorDecorator(new Error('Error Message'), new RedisLoggerService());
 };

  main();
}
