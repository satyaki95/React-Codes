// object Literals

function studentInfo1(name,age){
    return{
        name : name,
        age : age
    }
}

console.log(studentInfo1("Satyaki saha",28));


let message = {
    body : function(){
        return`hi, i am object`
    }
}

console.log(message.body());


let message1 = {
    'body name'(){
        return`hi, i am object`
    }
}

console.log(message1['body name']());