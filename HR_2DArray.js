/* 

*/

// function hourglassSum(input) {
//     // lowest possible max is -9 * 7
//     let inputRows = input.trim().split("\n");
//     const matrix = [];
//     for (i = 0; i < inputRows.length; i++) {
//         let inputColumns = inputRows[i].split(" ");
//         matrix.push(inputColumns)
//     }
//     const getHourGlass = (array, x, y) => {
//         return ( 
//         array[x - 1][y + 1] + array[x][y + 1] + array[x + 1][y + 1]
//                                 + array[x][y]
//          + array[x - 1][y - 1] + array[x][y - 1] + array[x + 1][y - 1]);
//     };
//     let maxHG = getHourGlass(matrix, 1, 2);
//     console.log(maxHG)
//     // for(let y = 0; y < matrix.length; y++) {
//     //     for (let x = 0; x < matrix[y].length; x++) {
//     //         let hGD = getHourGlass(matrix, x, y)
//     //         if (hGD > maxHG) maxHG = hGD;
//     //     }
//     // }
    
//     return maxHG;

// }

function hourglassSum(input) {
    // lowest possible max is -9 * 7
    var largest = -63;
    for (var y = 0; y < 4; y++) {
        for (var x = 0; x < 4; x++) {
            var size = input[y][x] + input[y][x + 1] + input[y][x + 2] + input[y + 1][x + 1] + input[y + 2][x] + input[y + 2][x + 1] + input[y + 2][x + 2];
            largest = Math.max(size, largest);
        }
    }
    return largest;

}

console.log(hourglassSum(
[[1, 2, 3, 1, 0, 0],
[0, 1, 1, 0, 0, 0],
[6, 2, 3, 0, 0, 0],
[0, 9, 2, -4, -4, 0],
[0, 0, 0, -2, 0, 0],
[0, 0, -1, -2, -4, 0]]));