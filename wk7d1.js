/* Prompt : create a stack using prototypal instantiation pattern. then refactor to pseudoclassical 
 */

 //prototypal
var Stack = function() {
    let obj = Object.create(stackMethods);
    obj.storage = {};
    obj.count = 0;
    return obj;
}

var stackMethods = {
    push: function(val) {
        this.storage[this.count++] = val;
    },

    pop: function() {
        if (this.count === 0) {
            return undefined;
        }

        let lastVal = this.storage[--this.count];
        delete this.storage[this.count];
        return lastVal;
    },

    size: function() {
        return this.count;
    }
};

//pseudoclassical

var Stack = function() {
    this.storage = {};
    this.count = 0;
}

Stack.prototype.push = function(val){
    this.storage[this.count++] = val;
};
Stack.prototype.pop = function(){
    if (this.count === 0) {
        return undefined;
    }

    let lastVal = this.storage[--this.count];
    delete this.storage[this.count];
    return lastVal;
};
Stack.prototype.size = function(){
    return this.count;
};

