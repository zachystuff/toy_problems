// Your task is to find their comparison points by comparing  with ,  with , and  with .

// If score1[i] > score2[i], then Alice is awarded  point.
// If score1[i] < score2[i], then Bob is awarded  point.
// If score1[i] = score2[i], then neither person receives a point.


function compareTriplets(alice, bob) {
    const score = [0, 0];
    for(let i = 0; i < alice.length; i++) {
        if(alice[i] > bob[i]){
            score[0]++;
        } else if (alice[i] < bob[i]) {
            score[1]++;
        }
    }
    return score;
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));