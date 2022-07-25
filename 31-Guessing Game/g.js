var win=0;
var loss=0;
for(var i=0;i<=5;i++){
    var num=parseInt(prompt("Enter a number from 1 to 5"));

var random=Math.floor(Math.random()*5)+1;

if(num==random){
    console.log("You won");
    win++;
}

else{
    console.log("You have lost. The no was  "+random);
    loss++;
}
}

document.write("You win = "+win+"times"+"<br/>"+
    "you lost = "+loss+"Times");
