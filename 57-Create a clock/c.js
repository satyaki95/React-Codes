
const btn = document.querySelector(".save-btn");

const para = document.querySelector(".massage");

btn.addEventListener("click",startClock);

function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    minutes = formateTime(minutes);
    seconds = formateTime(seconds);

    let time = hours+":"+minutes+":"+seconds;

   para.textContent =time;

   setInterval(startClock,1000);
}

function formateTime(value){
    if(value<10){
        value = "0"+value;
    }
    return value;
}
