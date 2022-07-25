

const textarea = document.querySelector("textarea");

textarea.addEventListener("keydown",function(e){
    console.log("keydown");

    if(e.repeat){
        alert("do not repeat");
    }
});



textarea.addEventListener("keypress",function(){
    console.log("keypress");
});




textarea.addEventListener("keyup",function(e){
    console.log("keyup");
    console.log(e.key);
    console.log(e.keyCode); // ascai value
    console.log(e.code); // key code
    console.log(e.shiftKey); // return true or false

    if(e.shiftKey){
        console.log("shift +"+e.key);
    }


});