// 1

setTimeout(()=>{
    console.log("hi");
},3000);

// 2

setTimeout(display,2000);

function display(){
    console.log('display function');
}

// 3 

const btn = document.querySelector(".save-btn");

const para = document.querySelector(".message");

btn.addEventListener("click", saveUser);

function saveUser(){
    para.textContent="User registration";
    setTimeout(()=>{
        para.textContent = "";
    }, 2000);
}


btn.addEventListener('click', displayCount);

function displayCount(){
    let count =0;
    para.textContent=count;

    setInterval(()=>{
        count++;
        para.textContent=count;
    },1000);
}