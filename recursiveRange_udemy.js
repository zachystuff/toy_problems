// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(x) {
    if (x <= 0) return 0;
    return x + recursiveRange(x - 1);
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));
