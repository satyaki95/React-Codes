// array destructure

let numbers = [10,20,30,40,50];

//let [num1,num2,num3,num4,num5] = numbers;   or
let [num1,num2,...z] = numbers;

console.log(num1);
console.log(num2);
console.log(z);



// Swap Variables

let a=10,  b=20;

[a,b]=[b,a]

console.log(a);
console.log(b);


// Object destructure

const studentInfo = {
    id: 101,
    fullName: "Satyaki Saha",
    gpa: 3.92
}

const {id,fullName}=studentInfo

console.log(id);
console.log(studentInfo.gpa);
console.log(fullName);

// Nasted Object destructure

const studentInfo1 = {
    id1: 101,
    fullName1: "Satyaki Saha",
    gpa1: 3.92,
    langauge: {
        native: "bng",
        beginar: "eng"
    }
}

const {id1,fullName1,langauge}=studentInfo1

console.log(id1);
console.log(studentInfo.gpa);
console.log(fullName1);
console.log(langauge.native);


//Destructuring function parameter

// const studentInfo2 = (student) => {
//     console.log(`${student.id2},${student.fullName2}`)
// }
const studentInfo2 = ({id2,fullName2}) => {
    console.log(`${id2},${fullName2}`)
}

const student = {
    id2: 101,
    fullName2: "Satyaki Saha",
}

studentInfo2(student)