"use strict"

function message(text="this is default parameter"){
    console.log(`${text}`);
}
message();
message("I love js");


"use strict"

function sum(x,y,...z){
    console.log(`x=${x},y=${y},z=${z}`);

}

sum(10,20,30,40,50);
