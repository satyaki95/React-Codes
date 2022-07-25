// throw

document.querySelector("#check").addEventListener("click",function(){
    var nam = document.querySelector("#numTextfield").value;
    
    try{
        if(nam < 5){
            throw "input is to low"
        }
        else if(nam > 10){
            throw "input is to high"
        }
        else{
            console.log(nam);
        }
    }catch(err){
        console.log(err);
    }
}

);

