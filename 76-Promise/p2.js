// const taskOne = (callback) =>{
//     console.log("track 1");
//     callback();
// }



// const taskOne1 = (callback) =>{
//     setTimeout(() => {
//         console.log("track 2. Data loading");
//         callback();
//     }, 2000);
// }

// const taskOne2 = (callback) =>{
//     console.log("track 3");
//     callback();
// }

// const taskOne3 = (callback) =>{
//     console.log("track 4");
//     callback();
// }

// const taskOne4 = () =>{
//     console.log("track 5");
    
// }

// taskOne( ()=> {
//     taskOne1(()=> {
//         taskOne2(()=> {
//             taskOne3(()=> {
//                 taskOne4();
//             })
//         });
//     });
// })

const taskone =() =>{
    return new Promise((resolve, reject) =>{
        resolve('task 1 is completed');
    })
}

const tasktwo =() =>{
    return new Promise((resolve, reject) =>{
      setTimeout(()=>{
        resolve('task 2 is completed');
      },2000);
    })
}

const taskthree =() =>{
    return new Promise((resolve, reject) =>{
        reject('task 3 is not completed'); // reject
    })
}

const taskfour =() =>{
    return new Promise((resolve, reject) =>{
        resolve('task 4 is completed');
    })
}

taskone().then((res)=>console.log(res))
.then(tasktwo)
.then(res => console.log(res))
.then(taskthree)
.then(res => console.log(res))
.then(taskfour)
.then(res => console.log(res))
.catch((err)=> console.log(err));




