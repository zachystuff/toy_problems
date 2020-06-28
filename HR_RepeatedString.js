/* 
Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

Given an integer, n, find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string s="abcac" and n=10, the substring we consider is "abcacabcac", the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length n in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Input Format

The first line contains a single string, s.
The second line contains an integer, n.

Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.
 */

function repeatedString(s, n) {
    let numOfReps = Math.floor(n/(s.length));
    let numOfA = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] === "a") numOfA++;
    }
    let result = numOfReps * numOfA;
    if (n % s.length !== 0) {
        let rem =  n % s.length;
        let str = s.slice(0, rem);
        for (let i = 0; i < str.length; i++) {
            if(str[i] === "a") result++;
            
        }
    }
    return result

}
 