// the television class
export class Television {
  state: boolean = false;
  on() {
    this.state = true;
  }

  off() {
    this.state = false;
  }
}
