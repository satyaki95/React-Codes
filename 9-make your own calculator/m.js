
var num1=prompt("Enter your 1st no : ");
var num2=prompt("Enter your 2nd number : ");

num1 = parseInt(num1,10);
num2 = parseInt(num2,10);

var sum,sub,mul,mod,div;

sum=num1+num2;

document.write("sum = "+sum +"<br/>");

sub=num1-num2;

document.write("sub = "+sub+"<br/>");

mul=num1*num2;

document.write("mul = "+mul+"<br/>");


div=num1/num2;

document.write("div = "+div+"<br/>");

mod=num1%num2;

document.write("mod = "+mod);
