// for .... of and for .... in

const names = ["s1","s2","s3"]
for(let name of names){
    console.log(name);
}

let students = {
    name : "Satyaki Saha",
    cgpa : 3.92
}

for(let x in students){
    console.log(x);

    console.log(students[x]);
    
    console.log(`${x} : ${students[x]}`);
}