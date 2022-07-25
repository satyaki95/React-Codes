
for(var i=0;i<3;i++){

    document.querySelectorAll(".myButton")[i].addEventListener("click",function (){

       var text = this.innerHTML;
       console.log(text); 
        audioPlay(text);
        playAnimation(text);

       

    });

}


function audioPlay(text){

    switch(text){
        case "a":
            var audio = new Audio("sound/1.wav");
            audio.play();
            break;
        case "b":
            var audio = new Audio("sound/2.wav");
            audio.play();
            break;
        case "c":
            var audio = new Audio("sound/3.wav");
            audio.play();
            break;
    }
}


document.addEventListener("keypress",function(event){

    var text = event.key;
    audioPlay(text);
    playAnimation(text);
});


function playAnimation(text){


    var select = document.querySelector("."+text);

    select.classList.add("anim");

    setTimeout(function(){

        select.classList.remove("anim");


    },1000);

}



// para start

document.addEventListener("keypress", function(event){

    var text = event.key;

    document.querySelector("p").innerHTML = "you have pressed "+text;

});

// text area starts


    var count =0;
document.querySelector("textarea").addEventListener("keypress",function(event){
    count++;
    var text =event.key;
    document.querySelector("h3").innerHTML = "you have pressed "+ count;
});