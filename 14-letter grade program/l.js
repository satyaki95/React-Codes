var num =parseFloat( prompt("Enter your marks :"));

if(num>=91 && num<=100)
document.write("A+");

else if(num>=81 && num<=90)
document.write("A");

else if(num>=71 && num<=80)
document.write("B+");

else if(num>=61 && num<=70)
document.write("B");

else if(num>=51 && num<=60)
document.write("C+");

else if(num>=40  && num<=50)
document.write("C");

else
document.write("Fail");