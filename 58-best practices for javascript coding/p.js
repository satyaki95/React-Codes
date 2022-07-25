// use camelcase for naming

const firstName = prompt("enter your first name");

document.write(firstName);

// or declare all the variable name
// variable declaration on top and initialize
// avoid unnecessary variables

let lastName,fullName;

// switch, case , default

switch(key){
    case value:
        break;

        default:
            break;
}

// object and array with const

const names = ["Satyaki","Guddu"];
names.push("sk");
console.log(typeof names);


//  ==vs==

console.log(2=="2"); // its true(only check value)
console.log(2==="2");// its false(check value and datatype)

// access dom less


const ol =document.querySelector(".student-list");
const firstOl =ol.children[0];


document.querySelector("button").addEventListener
("click",()=>{
    console.log("clicked");
});


