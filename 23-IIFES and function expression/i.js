

 (function display(me){
    console.log(me);
})("Hi"); 

(function sum(num1,num2){
    var al=num1*num2;
    console.log(al);
})(12,13);


const dd = function displayM(msg){
    console.log(msg);
};
dd("Satyaki");


var x = parseInt(prompt("Enter first number: "));
var y = parseInt(prompt("Enter second number: "));
(function sum_two_number(num1, num2){
    var answer = num1+num2;
    document.write(answer);
})(x,y);