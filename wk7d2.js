// create a stack in pseudoclassical style.

var Stack = function (){
    this.storage = {};
    this.count = 0;
};

Stack.prototype.push = function(value) {
    this.storage[this.count++] = value;
};

Stack.prototype.pop = function() {
    this.count && this.count--;
    let last = this.storage[this.count];
    delete this.storage[this.count];
    return last;
};

Stack.prototype.size = function() {
    return this.count;
};