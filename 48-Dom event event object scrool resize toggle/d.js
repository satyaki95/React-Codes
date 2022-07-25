

window.addEventListener("load", function(){

    console.log("lode");
});


window.addEventListener("unload", function(){

    console.log("unlode");
});


window.addEventListener("scroll",function(){
    console.log("scroll");
});

window.addEventListener("resize",function(){
    console.log("Resize");

    const width = this.window.outerWidth;
    const height = this.window.outerHeight;

    console.log(`height : ${height}, width : ${width}`)
});


const details = document.querySelector("details");

details.addEventListener('toggle',function(e){
    console.log("togel");

    console.log(e.target.open);
});


