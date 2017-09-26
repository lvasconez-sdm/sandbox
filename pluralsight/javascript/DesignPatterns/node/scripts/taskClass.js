'use strict';

class Task  {

    constructor (name, description) {
        this.name = name;
        this.description = description;
    }

    save() {
        console.log("Saving task \"" + this.name + "\"...");
    }

    complete()  {
        this.completed = true;
    }
}

Task.prototype.completed = false;


Task.prototype.toString =  function() {
    return this.name + " (" + this.description + "), completed = [" + this.completed + "]";
}

module.exports = Task;
