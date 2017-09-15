'use strict';

var Task = function (name, param2) {
    this.name = name;
    this.param2 = param2;

    this.save = function() {
        console.log("Saving task: \" " + this.name + "\" ");

    }
}

Task.prototype.completed = false;

Task.prototype.complete =  function() {
    this.completed = true;
}

Task.prototype.toString =  function() {
    return this.name + " " + this.param2 + " " + this.completed;
}

module.exports = Task;
