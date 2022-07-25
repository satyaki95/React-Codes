
function addNumber(x,y,z){
    return x+y+z;
}

let number = [1,2,3]

console.log(addNumber(number[0],number[1],number[2]));

//  or 

console.log(addNumber(...number));


let number1 = [5,6,...number,7];

console.log(number1);


let number2=[8,9,10,11];

let numbers=number1.concat(number2);
console.log(numbers);

let p1={
    name : "Satyaki Saha",
    age : 28,

}

let p2 = {
    nationality : "India",
    occupation : "Student"
}


let p = {
    ...p1,...p2
}

console.log(p);