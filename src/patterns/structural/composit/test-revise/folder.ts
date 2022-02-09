import IComponent from './icomponent';

export default class Folder implements IComponent {
  referenceToParent?: any;
  _dirName: string;
  components: IComponent[];

  constructor(dirName: string) {
    this._dirName = dirName;
    this.components = [];
  }

  dir(indent: string): void {
    console.log(`${indent}<DIR>  ${this._dirName}`);
    this.components.forEach((component) => {
      component.dir(indent + '..');
    });
  }

  detach(): void {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
      this.referenceToParent = undefined;
    }
  }

  delete(component: IComponent): void {
    // Removes leaf/composite from this composite this.components
    const index = this.components.indexOf(component);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }

  attach(component: IComponent): void {
    component.detach();
    component.referenceToParent = this;
    this.components.push(component);
  }
}
