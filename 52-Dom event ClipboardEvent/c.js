

const input = document.querySelector("input");

const p = document.querySelector("p");

// copy

input.addEventListener("copy",function(){
    console.log("copied");
    p.innerText = "you copied";
});

// cut 


input.addEventListener("cut",function(){
    console.log("cuted");
    p.innerText = "you cuted";
});

// paste


input.addEventListener("paste",function(){
    console.log("pasted");
    p.innerText = "you pasted";
});





