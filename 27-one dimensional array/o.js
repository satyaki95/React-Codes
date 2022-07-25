
function highestScore(scores){
    console.log(scores);

    let max = scores[0];

    for(var x=1;x<scores.length;x++){
        if(max<scores[x]){
            max=scores[x];
        }
    }

    return max;
}

let scores = [21,28,1,88,15];



var maximum=highestScore(scores);

console.log(maximum);