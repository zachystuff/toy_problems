// Given two arrays A and B consisting of N integers each
// Index K is named fair if the four sums(A[0] + ... + A[K - 1]), (A[k] + ... + A[N - 1]), (B[0] + ... + B[K - 1]) and(B[k] + ... + B[N - 1]) are all equal.In other words, K is the index where the two arrays, A and B, can be split(into two non - empty arrays each) in such a way that the sums of the resulting arrays elements are equal.
//     Example:
// Input: A = [4, -1, 0, 3] and B = [-2, 5, 0, 3]
// Output: No of fair indices = 2


function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sum = (num) => {
        var sumI = 0;
        for(let i = 0 ; i < num.length; i++) {
            sumI += num[i];
        }
        return sumI;
    }
    var cnt = 0;
    var sumA = sum(A);
    var sumCurA = 0;
    var sumCurB = 0;
    var sumB = sum(B);
    
    for (let i = 0 ; i < A.length - 1; i++) {
        sumCurA += A[i];
        sumA -= A[i];
        sumCurB += B[i];
        sumB -= B[i];
        if(sumCurA == sumCurB && sumA == sumB && sumCurA == sumA) {
            cnt += 1
        }
    }
    return cnt;
}