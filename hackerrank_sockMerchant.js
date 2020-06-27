

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    if (n < 1 || n > 100) {
        return 0
    }
    if (ar.length !== n) {
        return 0
    }
    let store = {};
    let count = 0
    for (const sock of ar) {
        if (!store[sock]) {
            store[sock] = 1
        } else {
            store[sock]++
        }
    }
    for (const pairs in store) {
        if (store[pairs] % 2 === 0) {
            count += (store[pairs] / 2)
        } else {
            if (store[pairs] > 1) {
                count += (store[pairs] - 1) / 2
            }
        }
    }
    return count

};

console.log(sockMerchant(10, [10, 20, 20, 10, 10, 30, 50, 10, 20]));