function findSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0) {
            sum += i;
        } else if (i % 5 == 0) {
            sum += i;
        } else {
            continue;
        }
    }
    return sum;
}

console.log(findSum(5));
console.log(findSum(10));