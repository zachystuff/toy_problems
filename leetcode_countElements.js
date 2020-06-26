/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
    const store = {};
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(!store[arr[i]]) {
            store[arr[i]] = 1
        } else {
            store[arr[i]]++
        }
    }

    for(let i = 0; i < arr.length; i++) {
        let next = parseInt(arr[i]) + 1;
        if(store[next] && store[next] > 0) {
            store[next]--;
            count++
        }
    }

    return count

};

console.log(countElements([1, 2, 3, 1]));
console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7]));
console.log(countElements([1, 3, 2, 3, 5, 0]));