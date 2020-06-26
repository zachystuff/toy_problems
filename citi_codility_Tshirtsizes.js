// An online shop sells tshirts of three sizes: s(Small), M(medium) and L(Large)
// Write a function solution that, given a string T of length N containing letter S, M and L, returns a sorted string T by T-shirt sizes from the smallest to the largest.

// Examples: 
// Given T = "MSSLS", the function should return "SSSML"
// Given T = "LLMS", the function sshould return "SMLL"
// Given T = "SMS", the function should return "SSM"

function solution(T) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sampleStr = "SML";
    let stringArr = T.split("");
    // for (let i = 0; i < stringArr.length - 1; i++) {
    //     for(let j = 0; j < stringArr.length - i - 1; j++) {
    //         if (sampleStr.indexOf(stringArr[j]) > sampleStr.indexOf(stringArr[j+1])) {
    //             let temp = stringArr[j + 1];
    //             stringArr[j + 1] = stringArr[j];
    //             stringArr[j] = temp;
    //         }
    //     }
    // }
    stringArr.sort()
    return stringArr.join('')
}
console.log(solution('MSSLS'));

function solution(T) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sampleStr = "SML";
    let stringArr = T.split("");
    /*
     for (var i = 0; i < stringArr.length - 1; i++) {
        for(var j = 0; j < stringArr.length - i - 1; j++) {
            if (sampleStr.indexOf(stringArr[j]) > sampleStr.indexOf(stringArr[j+1])) {
                let temp = stringArr[j + 1];
                stringArr[j + 1] = stringArr[j];
                stringArr[j] = temp;
            }
        }
    }
    */
    stringArr.sort(function (a, b) {
        if (sampleStr.indexOf(a) < sampleStr.indexOf(b)) {
            return -1;
        } else if (sampleStr.indexOf(a) > sampleStr.indexOf(b)) {
            return 1;
        } else {
            return 0;
        }
    })
    return stringArr.join('')
}
//  (nlogn)