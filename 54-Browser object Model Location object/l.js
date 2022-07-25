// window object
console.log(window);

// document object
console.log(window.document);

console.log(document);

// location object
console.log(window.location);


// href
console.log(location.href);

// protocol
console.log(location.protocol);

// host name
console.log(location.hostname);

// port
console.log(location.port);

//path name
console.log(location.pathname);


var lacationDiv = document.querySelector(".location-div");

var p1 = lacationDiv.children[0];
p1.textContent = location.href;

var p2 = lacationDiv.children[1];
p2.textContent = location.protocol;

var p3 = lacationDiv.children[2];
p3.textContent = location.hostname;

var p4 = lacationDiv.children[3];
p4.textContent = location.port;

var p5 = lacationDiv.children[4];
p5.textContent = location.pathname;


var btn = document.querySelector("#visit-button");
btn.addEventListener("click",function(){
    location.assign("https://mail.google.com/mail/u/0/#inbox")
});