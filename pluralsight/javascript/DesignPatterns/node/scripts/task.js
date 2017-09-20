'use strict';

var Task = function (name, description) {
    this.name = name;
    this.description = description;

    this.save = function() {
        console.log("Saving task \"" + this.name + "\"...");
    }
}

Task.prototype.completed = false;

Task.prototype.complete =  function() {
    this.completed = true;
}

Task.prototype.toString =  function() {
    return this.name + " (" + this.description + "), completed = [" + this.completed + "]";
}

module.exports = Task;
