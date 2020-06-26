function findLongestSubstring(string) {
    // add whatever parameters you deem necessary - good luck!
    if (string.length === 0) return 0;
    let longest = 0;
    let seen = {};
    let start = 0;
    for (let letter of string) {

    }
};

console.log(findLongestSubstring('')); //0
console.log(findLongestSubstring('rithmschool')); //7
console.log(findLongestSubstring('thisisawwesome')); //6
console.log(findLongestSubstring('thecatinthehat')); //7
console.log(findLongestSubstring('bbbbb')); //1