function repeats(str) {
    // return true if the first half of str equals the last half, false if not
    let i;
    let half;
    let firstHalf;
    let secHalf;

    //edge case
    if(str.length === 0) {
        return true;
    }
    // if the string length is odd, return 0 since there cant be equal halves
    if (str.length % 2 !== 0) {
        return false;
    }

    //divide string into 2 halves based on length
    half = str.length / 2;
    firstHalf = str.slice(0, half);
    secHalf =str.slice(half) ;
    //create conditional to compare both halves
    for (i = 0; i < firstHalf.length; i++) {
        if(firstHalf[i] !== secHalf[i]) {
            return false;
        } 
    }

    return true;
}

console.log(repeats("rattar"));
console.log(repeats("cupcup"));
console.log(repeats("ratarat"));