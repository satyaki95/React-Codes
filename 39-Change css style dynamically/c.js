function addstyle(){


var myVar =   document.querySelector("#para");
var myVar1 =   document.querySelector("#para2");

myVar.classList.add("para-style");

myVar1.classList.add("para1-style");

// myVar.style.color="red";
// myVar.style.fontSize = "3rem";
// myVar.style.fontWeight = "bold";
// myVar.style.fontStyle = "italic";

}


function removeStyle(){

    var myVar =   document.querySelector("#para");
    var myVar1 =   document.querySelector("#para2");

 myVar.classList.remove("para-style");
 myVar1.classList.remove("para1-style");
}