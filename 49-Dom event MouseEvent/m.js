

const div = document.querySelector("div");

// click

div.addEventListener("click",function(e){
    console.log("click");

    console.log(e);

    console.log(e.target);

// what is my div id

    console.log(e.target.id);

    // what is my div class

    console.log(e.target.className);

    // find any html is there

    console.log(e.target.innerHTML);

    // see text contain

    console.log(e.target.textContent);

    // or

    console.log(e.target.innertext);
});

//double click

div.addEventListener("dblclick",function(){
    console.log("dblclick");
});


//  mouse down

div.addEventListener("mousedown",function(){
    console.log("mousedown");
});



// mouse up

div.addEventListener("mouseup",function(){
    console.log("mouseup");
});


// mouse enter

div.addEventListener("mouseenter",function(){
    console.log("mouseenter");
});

// mouse leave

div.addEventListener("mouseleave",function(){
    console.log("mouseleave");
});


// mouse move

div.addEventListener("mousemove",function(e){
    console.log("mousemove");

    //  mouse move Xaxis or Yaxis

    console.log("clientX = "+e.clientX + ", clientY = "+e.clientY);

     //  mouse move Xaxis or Yaxis

    console.log("offsetX = "+e.offsetX + ", offsetY = "+e.offsetY);
});



// mouse over


div.addEventListener("mouseover",function(){
    console.log("mouseover");
});



// button 

const btn = document.querySelectorAll(".btn");

console.log(btn);


Array.from(btn).map((button) => {
    button.addEventListener("click", function(e){
        console.log("clicked");

        console.log(e.target.innertext);
        
    });
});

