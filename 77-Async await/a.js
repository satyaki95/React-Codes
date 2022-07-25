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

// taskone().then((res)=>console.log(res))
// .then(tasktwo)
// .then(res => console.log(res))
// .then(taskthree)
// .then(res => console.log(res))
// .then(taskfour)
// .then(res => console.log(res))
// .catch((err)=> console.log(err));


async function callAllTasks(){
    const t1 = await taskone();
    console.log(t1);
    const t2 = await tasktwo();
    console.log(t2);
    const t3 = await taskthree();
    console.log(t3);
    const t4 = await taskfour();
    console.log(t4);
}

// arow funnction

const callAllTasks1 = async() => {
   try{
    const t1 = await taskone();
    console.log(t1);
    const t2 = await tasktwo();
    console.log(t2);
    const t3 = await taskthree();
    console.log(t3);
    const t4 = await taskfour();
    console.log(t4);
   }catch(e){
    console.log(e);
   }
};

// callAllTasks();
callAllTasks1();
