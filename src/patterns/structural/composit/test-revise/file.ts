import Folder from './folder';
import IComponent from './icomponent';

export default class File implements IComponent {
  referenceToParent?: Folder;
  _fileName: string;

  constructor(fileName: string) {
    this._fileName = fileName;
  }

  dir(indent: string): void {
    console.log(`${indent}<FILE> ${this._fileName}`);
  }

  detach(): void {
    'Detaching this leaf from its parent composite';
    if (this.referenceToParent) {
      // delete this reference from the parent it is attached to
    }
  }
}
