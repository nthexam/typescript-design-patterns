export interface ICommand {
  execute(): Promise<any>; // As this operation can be async
}
