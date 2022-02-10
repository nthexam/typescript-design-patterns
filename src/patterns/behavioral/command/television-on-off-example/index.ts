import { Remote } from './Remote';
import { Television } from './Television';
import { TelevisionOffCommand } from './TelevisionOffCommand';
import { TelevisionOnCommand } from './TelevisionOnCommand';

let television = new Television();
let televisionOnCommand = new TelevisionOnCommand(television);
let televisionOffCommand = new TelevisionOffCommand(television);
let remote = new Remote();

// Setting up command to use it // invoker
remote.setCommand(televisionOnCommand, televisionOffCommand);

console.log('state of television before remote is used:', television.state);
remote.onButtonClick();
console.log('state of television after remote is used:', television.state);
