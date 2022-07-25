

const input = document.querySelector("input");

// blur

input.addEventListener("blur",function(e){
    console.log("blur");

    console.log(e.target.value);
    input.value = e.target.value.toUpperCase();

});

// focus
input.addEventListener("focus",function(){
    console.log("focus");

    input.style.backgroundColor="orange";
    input.style.padding="2rem";
});

//focus in

input.addEventListener("focusin",function(){
    console.log("focusin");
});

// focus out

input.addEventListener("focusout",function(){
    console.log("focusout");
});
