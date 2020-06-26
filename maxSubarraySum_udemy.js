function maxSubarraySum(arr, num) {
    // add whatever parameters you deem necessary - good luck!
    let temp = 0
    let max = 0;
    if (num > arr.length) return null;
    for(let i = 0; i < num; i++) {
        max += arr[i];
    }
    temp = max;
    for(let j = num; j < arr.length; j++) {
        temp = temp - arr[j - num] + arr[j];
        if (temp > max) max = temp;
    }

    return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
console.log(maxSubarraySum([-3, 4, 0 -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3));  // null