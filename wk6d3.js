// Rock Paper Scissors Permutations
// Rock Paper Permutation Given a number of rounds n, return all the possible rock - paper - scissors play possibilities for that number of rounds.

function rockPaperPermutation(rounds) {
    //create result array
    let result = [];
    let string = '';
    let possible = ['r', 'p', 's'];

    if (rounds === 0) {
        return [];
    }
    const game = function (string) {
        if (string.length === rounds) {
            result.push(string);
            return;
        }

        for (let i = 0; i < possible.length; i++) {
            game(string + possible[i]);
        }
    }
    game(string);
    return result;
}

console.log(rockPaperPermutation(0)); //=> []
console.log(rockPaperPermutation(1)); //=> ['r','p','s']
console.log(rockPaperPermutation(2)); //=> ['rr','rp','rs','pr','pp','ps','sr','sp','ss']
