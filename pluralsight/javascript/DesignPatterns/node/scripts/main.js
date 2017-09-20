var Task = require('./taskClass');

var task4 = new Task('Hello 1', 'Test of World 1');
var task5 = new Task('Hello 2', 'Test of World 2');

console.log(Task.prototype);

console.log(task4);
console.log(task4.toString());
task4.save();

task5.complete()

console.log(task5);
console.log(task5.toString());
task5.save();

