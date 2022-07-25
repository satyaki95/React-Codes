
for(var i=0;i<3;i++){

    document.querySelectorAll(".myButton")[i].addEventListener("click",function (){

       var text = this.innerHTML;
       console.log(text); 
        audioPlay(text);

       

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
