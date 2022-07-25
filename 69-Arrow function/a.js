function display(){
    console.log("i am display");
}

display();

// arrow function

const display2 = () =>{
    console.log("i am display2");
}
display2();



function message(){
    return "hi i am message";
}
console.log(message());

// arrow function


const message1= () =>"hi i am message1"; // if use return keyword then use {}

console.log(message1());



function add(num1,num2){
    return num1+num2;
}

console.log(add(10,30));

// arrow function

const add2 = (num1,num2)=> num1+num2;

console.log(add2(21,30));