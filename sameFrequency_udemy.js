function sameFrequency(num1, num2) {
    // good luck. Add any arguments you deem necessary.
    num1 = num1.toString();
    num2 = num2.toString();

    if (num1.length !== num2.length) return false;

    const num1Store = {};
    const num2Store = {};

    for (let num of num1) {
        num1Store[num] = (num1Store[num] || 0) + 1;
    }
    for (let num of num2) {
        num2Store[num] = (num2Store[num] || 0) + 1;
    }

    for (let num in num1Store) {
        if (num1Store[num] !== num2Store[num]) return false;
    }
    return true;
}
