export class IoCContainer {
  /*
    This can be used as singelton pattern
    */
  private static _instance: IoCContainer = new IoCContainer();

  /* Object that can store dependencies */
  private _dependencies: {
    [key: string]: Object;
  } = {};

  private constructor() {
    if (IoCContainer._instance) {
      throw new Error('Singelton class. Cannot instantiste using new');
    }
    IoCContainer._instance = this;
  }

  public static get instance(): IoCContainer {
    return IoCContainer._instance;
  }

  /*
    Methods of Ioc TO Work
    */

  register(name: string, dependencies: string[], implementation: any) {
    if (this._dependencies[name]) {
      throw new Error('Dependency already registered');
    }
    let dependenciesImplementations =
      this.getDepepndencisImplementations(dependencies);
    // To make depepdencies graph for various objects
    this._dependencies[name] = new implementation(
      ...dependenciesImplementations
    );
  }

  resolve<T>(name: string): T {
    if (!this._dependencies[name]) {
      throw new Error(`Unresolved depepdency ${name}`);
    }
    return this._dependencies[name] as T;
  }

  private getDepepndencisImplementations(names: string[]): Object[] {
    return names.map((name) => this.resolve(name));
  }
}
