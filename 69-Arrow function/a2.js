
var students = [
    {
        id: 101,
        name: "Satyaki Saha",
        gpa: 2.65
    },
    {
        id: 102,
        name: "Samrat Das",
        gpa: 3.65
    },
    {
        id: 103,
        name: "Joy Sen",
        gpa: 4.65
    },
    {
        id: 104,
        name: "Bejoy Das",
        gpa: 5.65
    }
]


function studentName(){

    return students.filter(function(x){
        return x.gpa > 3.7
    }).map(function(y){
        return y.name;
    });

}

console.log(studentName());

// Arrow

const studentName1 = () =>{
    return students.filter((x)=> x.gpa>3).map((y)=>y.name);
}

console.log(studentName1());