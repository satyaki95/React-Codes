// import { text, setText } from "./Module.js";
// console.log(text);
// setText("goodbye")
// console.log(text);

// import { message} from "./Module.js";
// console.log(message);

import { message as text } from "./Module.js";
console.log(text);

class Student {
    constructor(id,name){
        this.id = id;
        this.name = name;

    }

    set studentsName(name){
        this.name=name;
    }

    get studentInfo(){
        return this.id+" "+this.name;
    }
}

let s1 = new Student(101,"Satyaki");
console.log(s1);

s1.studentsName="lalala";
console.log(s1.name);


console.log(s1.studentInfo);