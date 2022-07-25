// callback and higher order function

function square(x){
    console.log(`square of ${x}: ${x*x}`);
}
square(5);


// const y = square
// y(6);


function higherOrderFunction(num, callback){
    callback(num)
}
higherOrderFunction(7,square);

const taskOne = (callback) =>{
    console.log("track 1");
    callback();
}



const taskOne1 = (callback) =>{
    setTimeout(() => {
        console.log("track 2. Data loading");
        callback();
    }, 2000);
}

const taskOne2 = (callback) =>{
    console.log("track 3");
    callback();
}

const taskOne3 = (callback) =>{
    console.log("track 4");
    callback();
}

const taskOne4 = () =>{
    console.log("track 5");
    
}

taskOne( ()=> {
    taskOne1(()=> {
        taskOne2(()=> {
            taskOne3(()=> {
                taskOne4();
            })
        });
    });
})

document.querySelector("button").addEventListener('click', ()=>{
    console.log("clicked");
})