export abstract class CustomError {
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

//* DatabaseError class is also implemented similarly, except for one requirement change wherein the database error being critical in nature also needs a createAlert method.

export class DBError extends CustomError {
  constructor(error: Error) {
    super(error);
  }
  createErrorMessage(): void {
    this.errorMessage = `DB error: ${this.error.message}`;
  }
  logError(): void {
    console.log(this.errorMessage);
  }
  createAlert(): void {
    console.log('Alert Sent');
  }
}

//* The above example clearly violates the Liskov Substitution principle. Using a subclass of DBError can be an issue when you try to use it in a common error handler function:

const errorDecorator = (customError: CustomError) => {
  customError.createErrorMessage();
  customError.logError();
  // code smell
  if (customError instanceof DBError) {
    customError.createAlert();
  }
};

const main = () => {
  const dbError = new DBError(new Error('DB err1'));
  errorDecorator(dbError);
};

main();
