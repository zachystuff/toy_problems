// function reverse(str) {
//     // add whatever parameters you deem necessary - good luck!
//     let reversed = '';
//     if (str.length <= 1) return str;
//     return reversed.concat(str.slice(str.length - 1), reverse(str.slice(0, str.length - 1)));
     
// };

console.log(reverse('awesome'));
console.log(reverse('rithmschool'));

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

// more efficient method! using assignment operator instead of concat!

