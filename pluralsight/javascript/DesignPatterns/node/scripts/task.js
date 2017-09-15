'use strict';

var Task = function (param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
}

Object.defineProperty(Task, 'toString', {
    value: function() {
        return this.param1 + ' ' + this.param2
    },
    writable: false,
    enumerable: true,
    configurable: true
});

Task.completed = false;
Task.prototype.completed =  function() {
    this.completed = true;
}

module.exports = Task;
