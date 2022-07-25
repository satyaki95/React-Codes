// for vs foreach

var numbers = [10,20,30,40];

for(var x=0; x<numbers.length;x++){
    console.log(numbers[x]);
    
}

var numbers1 = [100,200,300,400];



numbers1.forEach(myFun)

function myFun(y){
    console.log(y);
}


var num=[1,2,3,4];
var square=[]

num.forEach(function(z){
    console.log(z);
    square.push(z*z);
})
console.log(square);


var num1 = [1,2,3,4,5];


num1.forEach(function(l,index,arr){
    arr[index]=l+5;
})
console.log(num1);