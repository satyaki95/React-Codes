// declare variable after initialised 

x=20;
console.log(x);
var x;

// if we use (let). then it get me error


x = 20;
if(true){
    y=10;
    console.log(`y=${y}`)
    var y;
}
console.log(`x=${x}`)
var x;


// if we use (strict) then we can not use any variable without declaration

"use strict"

var l=20;
console.log(`l=${l}`);