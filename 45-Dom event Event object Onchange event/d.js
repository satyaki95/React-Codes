

// const input = document.querySelector("input[name=name]");

// input.addEventListener("change",changehandeler)


// function changehandeler(e){
//     console.log("changed");

//     console.log(e.target);
//     console.log(e.target.className);
// }

// chackbox 



const varName = document.querySelectorAll("input[name=program]");

console.log(varName);


Array.from(varName).map((program)=>{
    program.addEventListener("change",programHandler)
});

function programHandler(e){
   if(e.target.checked){
    console.log("checked");
    console.log(e.target.value);
   }
}

// select


const dept = document.querySelector("#deperment");
console.log(dept);



dept.addEventListener("change", handelDepertment);

function handelDepertment(e){

    console.log("Selected");
    console.log(e.target.value);
}