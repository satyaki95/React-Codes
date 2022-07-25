console.log('wellcome');


// how to create Promise - panding , resolve , reject

const Promise1=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("completed promise 1");
    },2000)
    // let completedPromise = true;
    // if(completedPromise){
    //     resolve("completed promise 1");
    // }
    // else{
    //     reject(new error("not completed promise 1"));
    // }
});

Promise1.then(res => {
    console.log(res);
})
.catch((err) => {
    console.log(err.message);
});
console.log('end');


const promise2=new Promise((resolve, reject)=>{
    // resolve("compleate promice2");

    setTimeout(()=>{
        resolve("compleate promice2");
    },1000)

});

promise2.then((res)=> console.log(res));

// Promise.all([promise2,Promise1])
// .then(([res,res2])=> console.log(res,res2));


Promise.race([promise2,Promise1])
.then((res)=> console.log(res));