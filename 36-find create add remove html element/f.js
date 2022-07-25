var link=document.getElementsByTagName("a")[0];

console.log(link);

link.innerHTML


link.innerHTML = "Stydy with satyaki";

link.style.textDecoration="none";

link.style.color = "green";

link.style.fontSize = "1.5rem";

link.href = "http://StudywithSatyaki.com";


var h1=document.getElementsByTagName("h1")[0];

h1.innerHTML="Say Hallo";



// create a html element

var h3 =document.createElement("h1");

var text = document.createTextNode("This is heading 3");


h3.appendChild(text);

var myDiv = document.getElementById("my-div");

myDiv.appendChild(h3);

// remove element from html
var hading = document.getElementsByTagName("h1")[1];

myDiv.removeChild(hading);


var h4 =document.createElement("h1");

var text0 = document.createTextNode("This is heading 0");


h4.appendChild(text0);

var hading1 = document.getElementsByTagName("h1")[0];

myDiv.insertBefore(h4,hading1);


document.getElementById("my-div");

document.getElementById("my-div").classList;


document.getElementById("my-div").classList.add("div2");

document.getElementById("my-div").classList;

document.getElementById("my-div").classList.remove("div2");

document.getElementById("my-div").classList;