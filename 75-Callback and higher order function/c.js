// Synchronous programming

const taskOne = () =>{
    console.log("track 1");
}



const taskOne1 = () =>{
    setTimeout(() => {
        console.log("track 2. Data loading");
    }, 2000);
}

const taskOne2 = () =>{
    console.log("track 3");
}

const taskOne3 = () =>{
    console.log("track 4");
}

const taskOne4 = () =>{
    console.log("track 5");
}

taskOne();
taskOne1();
taskOne2();
taskOne3();
taskOne4();
