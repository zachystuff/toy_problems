/* 
Given two strings, determine if they share a common substring. A substring may be as small as one character.

For example, the words "a", "and", "art" share the common substring a. The words "be" and "cat" do not share a substring.

Function Description

Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring.

twoStrings has the following parameter(s):

s1, s2: two strings to analyze .
Input Format

The first line contains a single integer p, the number of test cases.

The following  pairs of lines are as follows:

The first line contains string s1.
The second line contains string s2.

Output Format

For each pair of strings, return YES or NO.
*/

function twoStrings(s1, s2) {
     const store1 = {};
     let result = "NO"
     for (const letter of s1) store1[letter] = letter;
     for (const lett of s2) {
         if (store1[lett]) {
             result = "YES";
             return result;
         }
     }
     return result;
}

console.log(twoStrings("hello","world"));
console.log(twoStrings("hi","world"));