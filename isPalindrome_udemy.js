// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


function isPalindrome(str) {
    // deals with odd
    if (str.length === 1) return true;
    // deals with even
    if (str.length === 2) return str[0] === str[1];
    // chops off from the outer parts of the string inward
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false;
}

