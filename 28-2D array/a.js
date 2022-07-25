
function highestRun(play){
    var high=play[0][0];
    var high1=play[0][1];

    for(var x=1;x<play.length;x++){

        if(high1<play[x][1]){
           high1=play[x][1];
           high=play[x][0]; 
        }
    }

    return high;
}

var play = [
    ["Satyaki",95],
    ["Sumit",25],
    ["Suvo",45],
    ["Anisha",105]
];

var name=highestRun(play);
console.log(name);