function capitalizeFirst(arr) {
    // add whatever parameters you deem necessary - good luck!
    let newArr = [];
    let newWord = arr[0][0].toUpperCase() + arr[0].slice(1);
    if (arr.length <= 1) return newWord;
    return newArr.concat(newWord, capitalizeFirst(arr.slice(1)));
    
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

console.log(capitalizeFirst(['car', 'taco', 'banana']));