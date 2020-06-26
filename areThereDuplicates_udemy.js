// SAME FREQUENCY
function areThereDuplicates(...theArgs) {
    // good luck. (supply any arguments you deem necessary.)
    let store = {};
    for(let val of theArgs) {
        store[val] = (store[val] || 0) + 1;
    }
    for(let key in store) {
        if(store[key] > 1) {
            return true
        }
    }
    return false
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));

// Multiple Pointers

function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

// ONE LINERS

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}