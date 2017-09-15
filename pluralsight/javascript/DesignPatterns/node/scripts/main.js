var Task = require('./task');

var task4 = new Task('Hello', 'World4');
var task5 = new Task('Hello', 'World5');

console.log(task4);
console.log(Task.prototype);
console.log(task4.toString());
console.log(task5.toString());

task5.save();
