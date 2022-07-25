// forEach , map , filter

var numbers = [2,3,4,5]
var squareNumber = []

numbers.forEach(function(x){
    squareNumber.push(x*x); 
})

console.log(squareNumber);


// map

var num =[10,20,30,40,50]
 var sq = num.map(function(y){
    return y*y;
 })

 console.log(sq);

 // filter

 var num1 =[11,22,33,44,55,5,15,26]
 var sqa = num1.filter(function(z){
    return z>30;
 })

 console.log(sqa);