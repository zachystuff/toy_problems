/* 
Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in your array.

For example, the length of your array of zeros n=10. Your list of queries is as follows:

    a b k
    1 5 3
    4 8 7
    6 9 1
Add the values of k between the indices a and b inclusive:

index->	 
     1 2 3  4  5 6 7 8 9 10
	[0,0,0, 0, 0,0,0,0,0, 0]
	[3,3,3, 3, 3,0,0,0,0, 0]
	[3,3,3,10,10,7,7,7,0, 0]
	[3,3,3,10,10,8,8,8,1, 0]
The largest value is 10 after all operations are performed.

Function Description

Complete the function arrayManipulation in the editor below. It must return an integer, the maximum value in the resulting array.

arrayManipulation has the following parameters:

n - the number of elements in your array
queries - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.

Input Format

The first line contains two space-separated integers b and m, the size of the array and the number of operations.
Each of the next  lines contains three space-separated integers a, b and k, the left index, right index and summand.


Output Format

Return the integer maximum value in the finished array.

Sample Input

5 3
1 2 100
2 5 100
3 4 100
Sample Output

200
Explanation

After the first update list will be 100 100 0 0 0.
After the second update list will be 100 200 100 100 100.
After the third update list will be 100 200 200 200 100.
The required answer will be 200.
5 [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]
*/

// function arrayManipulation(n, queries) {
//     let arr = new Array(n).fill(0);
//     let max = 0;
//     for (let j = 0; j < queries.length; j++) {
//         let ind1 = queries[j][0];
//         let ind2 = queries[j][1];
//         for (let k = ind1; k <= ind2; k++) {
//             arr[k] += queries[j][2];
//         }
//     }

//     for (let m = 0; m < arr.length; m++) {
//         if(arr[m] > max) max = arr[m];
//     }
//     return max;

// }

// function arrayManipulation(n, queries) {
//     let arr = new Array(n);
//     for (let i = 0; i < arr.length; i++) arr[i] = 0;
//     for (let j = 0; j < queries.length; j++) {
//         let ind1 = queries[j][0];
//         let ind2 = queries[j][1];
//         for (let k = ind1; k <= ind2; k++) {
//             arr[k] += queries[j][2];
//         }
//     }

//     let max = 0;
//     for (let m = 0; m < arr.length; m++) {
//         if (arr[m] > max) max = arr[m];
//     }
//     return max;

// }

const arrayManipulation = (n, queries) => {
    const arr = new Array(n).fill(0);
    let max = 0;
    for (let i = queries.length - 1; i >= 0; i--) {
        const [a, b, k] = queries[i];
        arr[a - 1] += k;
        if (b < arr.length) arr[b] -= k;
    }
    for (let j = 1; j < n; j++) arr[j] += arr[j - 1];
    for (let k = arr.length - 1; k >= 0; k--) {
        max = Math.max(max, arr[k]);
    }
            
    return max;
};

console.log(arrayManipulation(5,[[1, 2, 100], [2, 5, 100], [3, 4, 100]]));