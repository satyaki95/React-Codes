var name = "Satyaki Saha";
var age = 27;
var cgpa=8.2;
var lang=["Bengali","hindi","English"];


var student1={
    name :"Satyaki",
    age :27,
    cgpa :8.2,
    lang :["Bengali","hindi","English"]
}

console.log(student1);
console.log(student1.name);

// constructor

function Student(name,age,cgpa,lang){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;


    this.display =function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student2=new Student("Sumit",26,8.7,["Bengali","hindi","English"]);
var student3=new Student("Anup",26,8.7,["Bengali","hindi","English"]);
var student4=new Student("Bimol",26,8.7,["Bengali","hindi","English"]);
var student5=new Student("Suvo",26,8.7,["Bengali","hindi","English"]);
var student6=new Student("Sagar",26,8.7,["Bengali","hindi","English"]);
var student7=new Student("Sangita",26,8.7,["Bengali","hindi","English"]);
var student8=new Student("Arjun",26,8.7,["Bengali","hindi","English"]);



student2.display();
student3.display();
student4.display();
student5.display();
student6.display();